import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '../../components/ui/tabs';
import {
    DateRangePicker,
    DateRangePickerItem,
    DateRangePickerValue,
} from '@tremor/react';
import Overview from './Overview';
import { useState } from 'react';

const DashboardPage = () => {
    const [value, setValue] = useState<DateRangePickerValue>({
        from: new Date(2023, 1, 1),
        to: new Date(),
    });

    return (
        <div className="h-full w-full border-2 border-orange-400 bg-white p-6">
            <Tabs defaultValue="Overview" className="w-full">
                <div className="flex w-full justify-between">
                    <TabsList>
                        <TabsTrigger value="Overview">Overview</TabsTrigger>
                        <TabsTrigger value="Analytics">Analytics</TabsTrigger>
                        <TabsTrigger value="Bands">Bands</TabsTrigger>
                        <TabsTrigger value="Report">Report</TabsTrigger>
                    </TabsList>

                    <DateRangePicker
                        className="max-w-md"
                        value={value}
                        onValueChange={setValue}
                        selectPlaceholder="Select date range"
                        color="rose"
                    >
                        <DateRangePickerItem
                            key="ytd"
                            value="ytd"
                            from={new Date(2023, 0, 1)}
                        >
                            Today
                        </DateRangePickerItem>

                        <DateRangePickerItem
                            key="ytd"
                            value="ytd"
                            from={new Date(2023, 0, 1)}
                        >
                            Last 7 days
                        </DateRangePickerItem>

                        <DateRangePickerItem
                            key="ytd"
                            value="ytd"
                            from={new Date(2023, 0, 1)}
                        >
                            Last 14 days
                        </DateRangePickerItem>

                        <DateRangePickerItem
                            key="ytd"
                            value="ytd"
                            from={new Date(2023, 0, 1)}
                        >
                            Last 30 Days
                        </DateRangePickerItem>

                        <DateRangePickerItem
                            key="ytd"
                            value="ytd"
                            from={new Date(2023, 0, 1)}
                        >
                            Month to Date
                        </DateRangePickerItem>

                        <DateRangePickerItem
                            key="ytd"
                            value="ytd"
                            from={new Date(2023, 0, 1)}
                        >
                            Year to Date
                        </DateRangePickerItem>
                    </DateRangePicker>
                </div>
                <TabsContent value="Overview">
                    <Overview />
                </TabsContent>
                <TabsContent value="Analytics">
                    Change your password here.
                </TabsContent>
                <TabsContent value="Bands">
                    Change your password here.
                </TabsContent>
                <TabsContent value="Report">
                    Change your password here.
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default DashboardPage;
