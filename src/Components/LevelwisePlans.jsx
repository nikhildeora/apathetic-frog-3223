import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react'
import DefaultPlan from './DefaultPlan'

const LevelwisePlans = () => {
    return (
        <>
        <Center >

            <Tabs>
                <TabList>
                    <Tab>Beginner</Tab>
                    <Tab>Intermediate</Tab>
                    <Tab>Expert</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <DefaultPlan />
                    </TabPanel>
                    <TabPanel>
                        <DefaultPlan />
                    </TabPanel>
                    <TabPanel>
                        <DefaultPlan />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Center>
        </>
    )
}

export default LevelwisePlans