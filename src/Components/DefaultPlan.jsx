import {
    Tabs, TabList, TabPanels, Tab, TabPanel, Tbody, Tr, Td, Table, Thead, Th, Image, Input, Text, Button, Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import DefaultExerciseRow from './DefaultExerciseRow'

export default function DefaultPlan() {

    

    return (
        <Tabs maxW={"800px"} m={"auto"}>
            <TabList>
                <Tab>Monday</Tab>
                <Tab>Tuesday</Tab>
                <Tab>Wednesday</Tab>
                <Tab>Thursday</Tab>
                <Tab>Friday</Tab>
                <Tab>Saturday</Tab>
                <Tab>Sunday</Tab>
            </TabList>

            <TabPanels>
                <DefaultExerciseRow />
                <DefaultExerciseRow />
                <DefaultExerciseRow />
                <DefaultExerciseRow />
                <DefaultExerciseRow />
                <DefaultExerciseRow />
                <DefaultExerciseRow />
            </TabPanels>
        </Tabs>)
}