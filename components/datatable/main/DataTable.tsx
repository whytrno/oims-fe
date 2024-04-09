import {
    AccessorKeyColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import DataTablePagination from "@/components/datatable/main/DataTablePagination";
import React, {useEffect, useState} from "react";
import {Input} from "@/components/ui/input";

interface DataTableProps<TData, TValue> {
    columns: AccessorKeyColumnDef<TData, TValue>[];
    data: TData[];
    hideColumns?: string[];
}

export function DataTable<TData, TValue>({columns, data, hideColumns = []}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = useState<string>("");
    const [columnVisibility, setColumnVisibility] = useState<{ [key: string]: boolean }>(() => {
        const initialVisibility: { [key: string]: boolean } = {};
        columns.forEach(column => {
            initialVisibility[column.accessorKey as string] = true;
        });

        hideColumns?.forEach(hiddenColumn => {
            if (initialVisibility.hasOwnProperty(hiddenColumn)) {
                initialVisibility[hiddenColumn] = false;
            }
        });

        return initialVisibility;
    });


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            columnVisibility,
            globalFilter,
        }
    });

    useEffect(() => {
        table.setGlobalFilter(globalFilter);
    }, [globalFilter, table]);

    return (
        <div className="space-y-5">
            <div className="flex items-center py-4" suppressHydrationWarning={true}>
                <Input
                    placeholder="Filter..."
                    value={globalFilter}
                    onChange={(event) => setGlobalFilter(event.target.value)}
                    className="w-full md:max-w-sm"
                    suppressHydrationWarning={true}
                />
            </div>

            <DataTablePagination table={table}/>

            <div className="rounded-md border">
                <Table className="overflow-x-auto">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                <TableHead>No.</TableHead>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row, index) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    <TableCell>{index + 1}</TableCell>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default DataTable;
