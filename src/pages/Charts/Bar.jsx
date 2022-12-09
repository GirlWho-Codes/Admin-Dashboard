import React from 'react';
import { ChartComponent, SeriesCollectionDirective, DataLabel, Tooltip, ColumnSeries, SeriesDirective, Inject,  Legend, SplineAreaSeries, AreaSeries, DateTime, Category } from '@syncfusion/ej2-react-charts';
import {ChartsHeader} from '../../components'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';


const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <ChartsHeader category="Area" title="Olympic Medal Counts - RIO" />
    <ChartComponent
      id="bar-chart"
      height="420px"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[ColumnSeries, Legend, DataLabel, Tooltip, Category]} />
      <SeriesCollectionDirective>

        {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  );
};

export default Area;