// Libraries
import memoizeOne from 'memoize-one'
import {get, flatMap} from 'lodash'
import {Table, isNumeric} from '@influxdata/vis'

// Utils
import {parseResponse} from 'src/shared/parsing/flux/response'
import {toMinardTable} from 'src/shared/utils/toMinardTable'

// Types
import {FluxTable} from 'src/types'
import {AppState} from 'src/types'
import {DashboardDraftQuery} from 'src/types/dashboards'

export const getActiveTimeMachine = (state: AppState) => {
  const {activeTimeMachineID, timeMachines} = state.timeMachines
  const timeMachine = timeMachines[activeTimeMachineID]

  return timeMachine
}

export const getActiveQuery = (state: AppState): DashboardDraftQuery => {
  const {draftQueries, activeQueryIndex} = getActiveTimeMachine(state)

  return draftQueries[activeQueryIndex]
}

const getTablesMemoized = memoizeOne(
  (files: string[]): FluxTable[] => (files ? flatMap(files, parseResponse) : [])
)

export const getTables = (state: AppState): FluxTable[] =>
  getTablesMemoized(getActiveTimeMachine(state).queryResults.files)

const getVisTableMemoized = memoizeOne(toMinardTable)

export const getVisTable = (state: AppState): Table => {
  const fluxTables = getTables(state)
  const {table} = getVisTableMemoized(fluxTables)

  return table
}

const getNumericColumnsMemoized = memoizeOne(
  (table: Table): string[] => {
    const numericColumns = Object.entries(table.columns)
      .filter(([__, {type}]) => isNumeric(type))
      .map(([name]) => name)

    return numericColumns
  }
)

export const getNumericColumns = (state: AppState): string[] => {
  const table = getVisTable(state)

  return getNumericColumnsMemoized(table)
}

const getGroupableColumnsMemoized = memoizeOne(
  (table: Table): string[] => {
    const invalidGroupColumns = new Set(['_value', '_start', '_stop', '_time'])
    const groupableColumns = Object.keys(table.columns).filter(
      name => !invalidGroupColumns.has(name)
    )

    return groupableColumns
  }
)

export const getGroupableColumns = (state: AppState): string[] => {
  const table = getVisTable(state)

  return getGroupableColumnsMemoized(table)
}

const getXColumnSelectionMemoized = memoizeOne(
  (validXColumns: string[], preference: string): string => {
    if (preference && validXColumns.includes(preference)) {
      return preference
    }

    if (validXColumns.includes('_value')) {
      return '_value'
    }

    if (validXColumns.length) {
      return validXColumns[0]
    }

    return null
  }
)

export const getXColumnSelection = (state: AppState): string => {
  const validXColumns = getNumericColumns(state)
  const preference = get(getActiveTimeMachine(state), 'view.properties.xColumn')

  return getXColumnSelectionMemoized(validXColumns, preference)
}

const getFillColumnsSelectionMemoized = memoizeOne(
  (validFillColumns: string[], preference: string[]): string[] => {
    if (preference && preference.every(col => validFillColumns.includes(col))) {
      return preference
    }

    return []
  }
)

export const getFillColumnsSelection = (state: AppState): string[] => {
  const validFillColumns = getGroupableColumns(state)
  const preference = get(
    getActiveTimeMachine(state),
    'view.properties.fillColumns'
  )

  return getFillColumnsSelectionMemoized(validFillColumns, preference)
}
