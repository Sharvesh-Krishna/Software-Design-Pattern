import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const employeeId = form.roll.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await axios.post('http://localhost:8080/api/register', {
        employeeId,
        name,
        email,
        password,
      });

      if (response.data.success) {
        alert('Registration successful!');
        navigate('/user/dashboard');
      } else {
        alert('Registration failed: Employee ID or Email already exists.');
      }
    } catch (error) {
      console.error('Registration failed', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <Card className="w-1/4 flex flex-col mt-14">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription> </CardDescription>
        </CardHeader>
        <form onSubmit={handleRegister}>
          <CardContent className="grid gap-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="roll">Employee ID</Label>
              <Input id="roll" name="roll" type="text" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="text" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="user@shiftsymphony.ai" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" placeholder="******" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Create account</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default Register;
