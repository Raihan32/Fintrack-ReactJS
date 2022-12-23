import React from "react";
import Chart from 'react-apexcharts';

function Donutchart()
{
    return(
        <>
            <div className="container-fluid mt-3 mb-3"> 
            <Chart 
            type="donut"
            width={1349}
            height={550}
            series={[5000000,2000000]}
            options={{
                labels:['Income','Expense'],
                colors:['#21871F', '#FE3D3D'],
                title:{
                    
                },
                plotOptions:{
                    pie:{
                        donut:{
                            labels:{
                                show:true,
                                total:{
                                    show:false,
                                    
                                    fontSize:30,
                                    color:`red`
                                }
                            }
                        }
                    }
                },
                dataLabels:{
                    enabled:true,
                }

            }}
            />
            </div>
        </>
    )
}
export default Donutchart;