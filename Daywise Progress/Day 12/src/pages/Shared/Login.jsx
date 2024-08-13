import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Login() {
  const navigate = useNavigate();

  const handleEmployeeLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const employeeId = form.username.value;
    const password = form.password.value;

    try {
      const response = await axios.post('http://localhost:8080/api/login/employee', {
        employeeId,
        password,
      });

      if (response.data.success) {
        navigate('/user/dashboard');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('An error occurred during login.');
    }
  };

  const handleAdminLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const adminId = form.adminId.value;
    const password = form.adminPassword.value;

    try {
      const response = await axios.post('http://localhost:8080/api/login/admin', {
        adminId,
        password,
      });

      if (response.data.success) {
        navigate('/admin/dashboard');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">User</TabsTrigger>
          <TabsTrigger value="password">Admin</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Enter your employee credentials to login.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleEmployeeLogin}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Employee ID</Label>
                  <Input id="username" name="username" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" required />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">Login</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Enter your Admin credentials to login.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleAdminLogin}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="adminId">Admin ID</Label>
                  <Input id="adminId" name="adminId" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="adminPassword">Password</Label>
                  <Input id="adminPassword" name="adminPassword" type="password" required />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">Login</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Login;
