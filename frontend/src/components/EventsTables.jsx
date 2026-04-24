import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const EventsTables = () => {
    return (
        <div>
            <div>
                
            </div>
            <Table>
                <TableHead>
                  <TableHeadCell>Event</TableHeadCell>
                  <TableHeadCell>Venue</TableHeadCell>
                  <TableHeadCell>Category</TableHeadCell>
                  <TableHeadCell>Price</TableHeadCell>
                </TableHead>
                <TableBody className="">
                  <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Apple MacBook Pro 17"
                    </TableCell>
                    <TableCell>Sliver</TableCell>
                    <TableCell>Laptop</TableCell>
                    <TableCell>$2999</TableCell>
                  </TableRow>
                </TableBody>
            </Table>
        </div>
        
    )
} 

export default EventsTables;