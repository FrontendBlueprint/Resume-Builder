import React from "react";
import { FaPlus } from "react-icons/fa6";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";

function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 py-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-primary">ResumeBuilder</h1>
        <div className="flex items-center gap-3 md:gap-6">
          <nav className="px-3 md:px-5 py-1 md:py-2 text-sm font-medium text-gray-700 bg-white rounded-sm md:rounded-lg shadow-sm hover:bg-gray-100 transition-colors border border-primary">
            Dashboard
          </nav>
          <div className="flex items-center">
            <SignedOut>
              <SignInButton className="bg-gray-600 text-white px-2 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl">
        <div className=" pb-11 flex flex-col justify-center items-start gap-4 ">
          <h1 className="text-3xl">My Resume</h1>
          <p>build your resume with smart tech </p>
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {/* Add Resume Card */}
          <Dialog>
            <DialogTrigger asChild>
              <div className=" p-5 rounded-xl shadow-sm border-2 border-dashed border-primary hover:border-secondary transition-colors flex flex-col items-center justify-center cursor-pointer h-48">
                <div className="bg-blue-100 p-3 rounded-full mb-3">
                  <FaPlus className="text-blue-600 text-xl" />
                </div>
                <h3 className="font-medium text-gray-800">New Resume</h3>
                <p className="text-gray-500 text-xs mt-1 text-center">
                  Click to create
                </p>
              </div>
            </DialogTrigger>
            <DialogContent className="bg-white w-[350px] md:w-[400px] rounded-md ">
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold text-primary text-left">
                  Create New Resume
                </DialogTitle>
                <div className="py-4">
                <p className="text-gray-600 text-sm text-left">
                  Any for Resume you want assign
                </p>
              </div>
                <Input />
                <div className="flex justify-end gap-3 py-6">
                  <Button variant="goast" className="border border-primary" >cancel</Button>
                  <Button>Create</Button>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-gray-400 text-xs border-t border-gray-200">
        © {new Date().getFullYear()} ResumeBuilder (suraj savle)
      </footer>
    </div>
  );
}

export default Dashboard;
