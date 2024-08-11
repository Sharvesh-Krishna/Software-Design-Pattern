import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <Card className="w-1/4 flex flex-col mt-14">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription> </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="roll">Employee ID</Label>
            <Input id="roll" type="text" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="user@shiftsymphony.ai" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="******"/>
          </div>
        </CardContent>
        <CardFooter>
            <NavLink to="/user/dashboard" className="w-full">
              <Button className="w-full">Create account</Button>
            </NavLink>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Register