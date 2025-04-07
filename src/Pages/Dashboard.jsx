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

function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 py-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-primary">ResumeBuilder</h1>
        <div className="flex items-center gap-6">
          <nav className="px-5 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg shadow-sm hover:bg-gray-100 transition-colors border border-primary">
            Dashboard
          </nav>
          <div className="flex items-center">
            <SignedOut>
              <SignInButton className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium" />
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl ">
        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {/* Add Resume Card */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="bg-white p-5 rounded-xl shadow-sm border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors flex flex-col items-center justify-center cursor-pointer h-48">
                <div className="bg-blue-100 p-3 rounded-full mb-3">
                  <FaPlus className="text-blue-600 text-xl" />
                </div>
                <h3 className="font-medium text-gray-800">New Resume</h3>
                <p className="text-gray-500 text-xs mt-1 text-center">
                  Click to create
                </p>
              </div>
            </DialogTrigger>
            <DialogContent className="rounded-lg max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-gray-800">
                  Create New Resume
                </DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p className="text-gray-600 text-sm">
                  Resume creation dialog content would appear here
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-gray-400 text-xs border-t border-gray-200">
        © {new Date().getFullYear()} ResumeBuilder
      </footer>
    </div>
  );
}

export default Dashboard;