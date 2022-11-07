import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';
import { HorizontalBar, Pie } from 'react-chartjs-2';

const ChartDocs = ({data})=> {
        
        const getUrgentCount = ()=>{
            return  (data.filter((obj) => 
            !obj.status  
             && 
             (new Date(obj.deadline).setDate(new Date(obj.deadline).getDate()-5) < new Date()  )
             &&
             (new Date(obj.deadline) > new Date()  )
        )).length
        }

        const overdueCount = ()=>{
                return (data.filter((obj) => 
                !obj.status  
                 && 
                 (new Date(obj.deadline) < new Date()  )
                 
            )).length
        }

        const dataBar = {
            
            datasets: [
            {
                label: 'Срочные',
                data: [getUrgentCount()],
                backgroundColor: 'rgba(245, 74, 85, 0.8)',
                borderWidth: 1
            }, 
            {
                label: 'Просрочены',
                data: [overdueCount()],
                backgroundColor: 'rgba(153, 0, 33, 0.8)',
                
                borderWidth: 1
            },
            {
                label: 'Всего к подписанию',
                data: [(data.filter(obj=> !obj.status)).length],
                backgroundColor: 'rgba(250, 238, 20, 0.8)',
                
                borderWidth: 1
            },
            
            {
                label: 'Подписаны',
                data: [(data.filter(obj=> obj.status)).length],
                backgroundColor: 'rgba(42, 209, 42, 0.8)',
                borderWidth: 1
            }
            ]
        };

        const barChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
            xAxes: [{
                stacked: true,
                barPercentage: 1,
                gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
                }
            }],
            yAxes: [{
                
                gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
                },
                
            }]
            },
            title: {
                display: true,
                text: "Договоры"
               }
        }

        return (
            
           
                    <MDBCard className="mb-4">
                        <MDBCardBody>
                            <HorizontalBar data={dataBar} height={400} options={barChartOptions} />
                        </MDBCardBody>
                    </MDBCard>
            
            
        )
    }


export default ChartDocs;

