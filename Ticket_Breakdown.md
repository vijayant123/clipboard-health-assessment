# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

# Ticket 1
## Title
[BE] Add support of "customId" field to the Agents table and update related CRUD endpoints

## Description
The Facilities want to add their own identifiers to the Agents working with them instead of using internal Database generated IDs. We do that by adding a new column to the Agents table called "customId" and make it varchar and nullable. Then update the CRUD endpoints of Agent module with the newly added field to enable use of the new field, specifically the CREATE, READ and UPDATE endpoints. In the CREATE and UPDATE endpoints make sure the Custom ID being provided in input is unique.

# Ticket 2
## Title
[FE] Add "Custom ID" field to the Manage Agents screen of the company/Facility admin dashboard 

## Description
The Facilities want to add their own identifiers to the Agents working with them instead of using internal database generated IDs. FE team has to add the column "Custom ID" on the "List Agents" table where all the existing Agents of the system are presented in a tabular form. Further add the new field to "Edit Agent" screen and "Add new Agent" screen to allow for the Facilities to set the custom identifier when updating or creating new Agents.

# Ticket 3
## Title
[BE] Add "Custom ID" field to the "generateReport" function 

## Description
The Facilities want to get their own identifiers in the PDF quarterly report generated to ease their business process. While generating the report add a new column with title "Custom ID" which contains the "customId" of the Agent. If the Agent does not have a "customId" set for themselves the column should be empty.