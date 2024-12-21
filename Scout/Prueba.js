import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <CompassIcon className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Scout Event Manager</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost">
            <UserIcon className="w-5 h-5" />
            <span>Sign In</span>
          </Button>
          <Button>
            <UserPlusIcon className="w-5 h-5 mr-2" />
            <span>Sign Up</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 bg-background p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Welcome to Scout Event Manager</h2>
          <p className="text-muted-foreground mb-8">
            Organize and manage your scout events with ease. Sign up or sign in to get started.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Organizer</CardTitle>
                <CardDescription>Configure the event and view real-time results.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="num-groups">Number of Groups</Label>
                      <Input id="num-groups" type="number" min="1" />
                    </div>
                    <div>
                      <Label htmlFor="score-per-game">Score per Game</Label>
                      <Input id="score-per-game" type="number" min="1" />
                    </div>
                    <div>
                      <Label htmlFor="game-guides">Game Guides</Label>
                      <Select id="game-guides" multiple>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Game Guides" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="guide1">Guide 1</SelectItem>
                          <SelectItem value="guide2">Guide 2</SelectItem>
                          <SelectItem value="guide3">Guide 3</SelectItem>
                          <SelectItem value="guide4">Guide 4</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button>Configure Event</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Game Guide</CardTitle>
                <CardDescription>Mark the scores for the participating groups.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="group">Group</Label>
                      <Select id="group">
                        <SelectTrigger>
                          <SelectValue placeholder="Select Group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="group1">Group 1</SelectItem>
                          <SelectItem value="group2">Group 2</SelectItem>
                          <SelectItem value="group3">Group 3</SelectItem>
                          <SelectItem value="group4">Group 4</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="score">Score</Label>
                      <Input id="score" type="number" min="0" />
                    </div>
                    <Button>Submit Score</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-4 px-6 text-center">
        <p>&copy; 2023 Scout Event Manager. All rights reserved.</p>
      </footer>
    </div>
  )
}

function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UserPlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  )
}