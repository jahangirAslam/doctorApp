import { dividerClasses, Grid } from "@mui/material";
import React from "react";
import PrintIcon from '@mui/icons-material/Print';
const Bill = () => {
    return (
        <div>

            <Grid item lg={12} xs={12}>
                <h3 className="invoiceHeader">INVOICE</h3>

            </Grid>
            <Grid
                container
                direction='row'
                justifyContent='space-evenly'
                className="details"
            >
                <Grid item lg={12} xs={12}>
                <p className="printIcons icons"> <PrintIcon></PrintIcon>
                </p>
            </Grid>
                <Grid item lg={3} xs={12}>
                    <h3 className="invoceDetail">Patient Detail</h3>
                    <p className="invoceData"> Patient Doctorly</p>

                </Grid>
                <Grid item lg={3} xs={12}>
                    <h3 className="invoceDetail">Doctor Detail</h3>
                    <p className="invoceData">Patient Doctorly</p>

                </Grid>
                <Grid item lg={3} xs={12}>
                    <h3 className="invoceDetail">Payment Detail</h3>
                    <p className="invoceData">Online</p>

                </Grid>
                <Grid item lg={12} xs={12}>
                    <h3 className="invoiceSummary">Summary</h3>

                </Grid>

                {/* Invoice summary */}
                <Grid
                    container
                    direction="row"
                    className='listValueWrapper summaryTable'
                    item lg={12} xs={12}

                >
                    <Grid
                        item lg={1} xs={12}
                    >
                        <p className='listData'>Sr.No</p>
                    </Grid>
                    <Grid
                        item lg={2} xs={12}
                    >
                        <p className='listData'>Title</p>
                    </Grid>

                    <Grid
                        item lg={7} xs={12}
                    >
                        <p className='listData summaryAmount'>Amount</p>
                    </Grid>


                </Grid>

            </Grid>
            {/* for Invoice */}
            <Grid

                container
                direction='row'

            >
                <Grid
                    item lg={7} xs={12}
                >
                    <p className='listData summaryAmount'>Sub total</p>


                </Grid>
                <Grid
                    item lg={3} xs={12}
                >
                    <p className='listData summaryAmount'>400</p>


                </Grid>

                <Grid
                    item lg={7} xs={12}
                >
                    <p className='listData summaryAmount'>Tax (5%)</p>


                </Grid>

                <Grid
                    item lg={3} xs={12}
                >
                    <p className='listData summaryAmount'>400</p>


                </Grid>
                <Grid
                    item lg={7} xs={12}
                >
                    <p className='listData summaryAmount'>Total</p>


                </Grid>
                <Grid
                    item lg={3} xs={12}
                >
                    <p className='listData summaryAmount'>400</p>


                </Grid>




            </Grid>
            <Grid item lg={12} xs={12}>
                <p className="printIcons"> <PrintIcon></PrintIcon>
                </p>
            </Grid>




        </div>
    );
}

export default Bill;