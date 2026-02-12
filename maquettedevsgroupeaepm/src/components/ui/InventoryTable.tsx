import React from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from 'lucide-react';
import { Input } from './input';

const esgiItems = [
  {
    id: 1,
    name: "Serveur Rack Dell R740",
    category: "Serveurs",
    price: 250,
    stock: 10,
  },
  {
    id: 2,
    name: "Serveur Rack Dell R6000",
    category: "Serveurs",
    price: 100,
    stock: 10,
  },
  {
    id: 3,
    name: "Serveur Rack Dell R6000",
    category: "Serveurs",
    price: 100,
    stock: 10,
  },

];

export default function InventoryTable() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 py-4">
        <div className="relative max-w--sm w-full">
          <Input
            placeholder="Filter plants..."
            className="pl-10"
          />
          <Search className="absolute h-4 w-4 left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
      <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {esgiItems.map((esgiItems) => (
          <TableRow key={esgiItems.id}>
            <TableCell>{esgiItems.name}</TableCell>
            <TableCell>{esgiItems.category}</TableCell>
            <TableCell>{esgiItems.price}</TableCell>
            <TableCell className="font-bol">{esgiItems.stock}</TableCell>

            <TableCell className="text-right">
              <div className="flex justify-end space-x-4">
                <h1>Edit Button</h1>
                <h1>Delete Button</h1>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}

