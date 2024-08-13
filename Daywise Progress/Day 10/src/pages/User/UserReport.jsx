"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Plus, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter
} from "@/components/ui/sheet";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const apiUrl = 'http://localhost:8080/api/users'; // Replace with your actual API URL

const UserReport = () => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [startTime, setStartTime] = useState('12:00 AM');
  const [endTime, setEndTime] = useState('12:00 PM');
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    invoice: '',
    paymentStatus: '',
    className: '',
    hours: '',
    totalAmount: '',
    paymentMethod: ''
  });
  const [users, setUsers] = useState([
    {
      id: "1",
      invoice: "INV001",
      paymentStatus: "Active",
      class: "WebApp",
      totalAmount: "₹6500.00",
      hours: "52",
    },
    {
      id: "2",
      invoice: "INV002",
      paymentStatus: "Inactive",
      class: "React",
      totalAmount: "₹9875.00",
      hours: "79",
    },
    {
      id: "3",
      invoice: "INV003",
      paymentStatus: "Inactive",
      class: " Sequeal ",
      totalAmount: "₹5875.00",
      hours: "47",
    },
    {
      id: "4",
      invoice: "INV004",
      paymentStatus: "Active",
      class: " SpringBoot ",
      totalAmount: "₹10875.00",
      hours: "87",
    }
  ]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(apiUrl);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setFormData({
      invoice: user.invoice,
      paymentStatus: user.paymentStatus,
      className: user.className,
      hours: user.hours,
      totalAmount: user.totalAmount,
      paymentMethod: user.paymentMethod
    });
    setStartTime(user.startTime || '12:00 AM'); // Initialize with actual value if available
    setEndTime(user.endTime || '12:00 PM');     // Initialize with actual value if available
    setEditOpen(true);
  };

  const handleDeleteClick = async (userId) => {
    try {
      await axios.delete(`${apiUrl}/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleSaveChanges = async () => {
    if (selectedUser) {
      try {
        const response = await axios.put(`${apiUrl}/${selectedUser.id}`, {
          ...formData,
          startTime,
          endTime
        });
        setUsers(users.map(user => (user.id === selectedUser.id ? response.data : user)));
        setEditOpen(false);
      } catch (error) {
        console.error('Error updating user:', error);
      }
    }
  };

  const handleAddUser = async () => {
    try {
      const response = await axios.post(apiUrl, {
        ...formData,
        startTime,
        endTime
      });
      setUsers([...users, response.data]);
      setOpen(false);
      // Reset form data
      setFormData({
        invoice: '',
        paymentStatus: '',
        className: '',
        hours: '',
        totalAmount: '',
        paymentMethod: ''
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="w-full flex flex-col items-right pt-16 ml-56">
      <div className='m-1 p-4'>
        <Card className='shadow-sm shadow-primary'>
          <CardHeader className='w-full flex flex-row justify-between items-center'>
            <CardTitle>Users</CardTitle>
            <Button onClick={() => setOpen(!open)}>
              <Plus className='h-10 w-10 mr-2' /> Add
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Staff ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Hours</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="flex justify-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.invoice}</TableCell>
                    <TableCell>{user.paymentStatus}</TableCell>
                    <TableCell>{user.className}</TableCell>
                    <TableCell>{user.hours}</TableCell>
                    <TableCell>{user.totalAmount}</TableCell>
                    <TableCell>
                      <span className='w-full h-full flex justify-center items-center gap-3'>
                        <Edit 
                          className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md' 
                          onClick={() => handleEditClick(user)} 
                        />
                        <TrashIcon 
                          className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md' 
                          onClick={() => handleDeleteClick(user.id)} 
                        />
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Add User Sheet */}
        <Sheet open={open} onOpenChange={() => setOpen(false)}>
          <SheetContent className="overflow-y-auto max-h-full">
            <SheetHeader>
              <SheetTitle>Add User</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="invoice" className="text-right">Staff ID</Label>
                <Input id="invoice" value={formData.invoice} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="paymentStatus" className="text-right">Name</Label>
                <Input id="paymentStatus" value={formData.paymentStatus} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="className" className="text-right">Class</Label>
                <Input id="className" value={formData.className} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="hours" className="text-right">Hours</Label>
                <Input id="hours" value={formData.hours} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="totalAmount" className="text-right">Total Amount</Label>
                <Input id="totalAmount" value={formData.totalAmount} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="paymentMethod" className="text-right">Payment Method</Label>
                <Input id="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="col-span-3" />
              </div>

              <div className='flex flex-row gap-6'>
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="startTime" className="text-right">Start Time</Label>
                  <TimePicker
                    onChange={setStartTime}
                    value={startTime}
                    format="hh:mm a"
                    className="col-span-3"
                    clearIcon={null}
                    clockIcon={null}
                    disableClock={true}
                  />
                </div>
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="endTime" className="text-right">End Time</Label>
                  <TimePicker
                    onChange={setEndTime}
                    value={endTime}
                    format="hh:mm a"
                    className="col-span-3"
                    clearIcon={null}
                    clockIcon={null}
                    disableClock={true}
                  />
                </div>
              </div>
            </div>
            <SheetFooter className='flex flex-col flex-1'>
              <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-500' onClick={() => setOpen(false)}>Close</Button>
              <Button className='w-1/2 outline bg-green-400/90 hover:bg-green-500' onClick={handleAddUser}>Add</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        {/* Edit User Sheet */}
        <Sheet open={editOpen} onOpenChange={() => setEditOpen(false)}>
          <SheetContent className="overflow-y-auto max-h-full">
            <SheetHeader>
              <SheetTitle>Edit User</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="invoice" className="text-right">Staff ID</Label>
                <Input id="invoice" value={formData.invoice} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="paymentStatus" className="text-right">Name</Label>
                <Input id="paymentStatus" value={formData.paymentStatus} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="className" className="text-right">Class</Label>
                <Input id="className" value={formData.className} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="hours" className="text-right">Hours</Label>
                <Input id="hours" value={formData.hours} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="totalAmount" className="text-right">Total Amount</Label>
                <Input id="totalAmount" value={formData.totalAmount} onChange={handleChange} className="col-span-3" />
              </div>
              <div className="flex flex-col items-start gap-4">
                <Label htmlFor="paymentMethod" className="text-right">Payment Method</Label>
                <Input id="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="col-span-3" />
              </div>

              <div className='flex flex-row gap-6'>
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="startTime" className="text-right">Start Time</Label>
                  <TimePicker
                    onChange={setStartTime}
                    value={startTime}
                    format="hh:mm a"
                    className="col-span-3"
                    clearIcon={null}
                    clockIcon={null}
                    disableClock={true}
                  />
                </div>
                <div className="flex flex-col items-start gap-5">
                  <Label htmlFor="endTime" className="text-right">End Time</Label>
                  <TimePicker
                    onChange={setEndTime}
                    value={endTime}
                    format="hh:mm a"
                    className="col-span-3"
                    clearIcon={null}
                    clockIcon={null}
                    disableClock={true}
                  />
                </div>
              </div>
            </div>
            <SheetFooter className='flex flex-col flex-1'>
              <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-500' onClick={() => setEditOpen(false)}>Close</Button>
              <Button className='w-1/2 outline bg-green-400/90 hover:bg-green-500' onClick={handleSaveChanges}>Save</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default UserReport;
