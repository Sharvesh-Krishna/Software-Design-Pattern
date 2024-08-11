import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from 'react-router-dom';

export function Login() {

  const navigate = useNavigate();

  const handleEmployeeLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
      navigate('/user/dashboard');
    }
  };

  const handleAdminLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
      navigate('/admin/dashboard');
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
                  <Input id="username" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
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
                  <Input id="adminId" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="adminPassword">Password</Label>
                  <Input id="adminPassword" type="password" required />
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
