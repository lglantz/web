import React from 'react';
import { shape, oneOfType, arrayOf } from 'prop-types';
import Table from 'components/Table';
import strings from 'lang';
import { transformations, getOrdinal } from 'utility';
import { Mmr } from 'components/Visualizations/Table/HeroImage';

const rankingColumns = [{
  displayName: strings.th_rank,
  displayFn: (row, col, field, index) => getOrdinal(index + 1),
}, {
  displayName: strings.th_name,
  displayFn: (row, col, field) => {
    const subtitle = <Mmr number={row.solo_competitive_rank} />;
    return transformations.player({ ...row, subtitle }, col, field);
  },
}, {
  displayName: strings.th_score,
  field: 'score',
  displayFn: row => parseFloat(row.score).toFixed(),
  relativeBars: true,
}];

const RankingTable = ({
  rankings,
}) => (<Table data={rankings} columns={rankingColumns} />);

RankingTable.propTypes = {
  rankings: oneOfType([
    arrayOf(shape({})),
    shape({}),
  ]),
};

export default RankingTable;
