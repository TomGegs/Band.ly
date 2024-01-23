import { Grid, Card, Text, Metric } from '@tremor/react';

const Overview = () => {
    return (
        <div className="w-full mt-5">
            {' '}
            <Grid numItems={1} numItemsSm={2} numItemsLg={4} className="gap-2">
                <Card>
                    <Text>Total Revenue</Text>
                    <Metric>$96,990</Metric>
                </Card>
                <Card>
                    <Text>Cost</Text>
                    <Metric>$68,220</Metric>
                </Card>
                <Card>
                    <Text>Active Bands</Text>
                    <Metric>12</Metric>
                </Card>
                <Card>
                    <Text>Margin</Text>
                    <Metric>+$28,770</Metric>
                </Card>
            </Grid>
        </div>
    );
};

export default Overview;
