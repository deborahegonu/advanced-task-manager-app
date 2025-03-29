import { ProfileForm } from "@/blocks/form/ProfileForm"
import { ModeToggle } from "@/components/theme/toggle-theme"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Settings() {
    return(
        <div className="p-5">
            <h1 className="text-4xl font-bold mb-5">Settings</h1>
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="account" className="tracking-wider">Account</TabsTrigger>
                    <TabsTrigger value="appearance" className="tracking-wider">Appearance</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <ProfileForm />
                </TabsContent>
                <TabsContent value="appearance">
                    <div>
                        <ModeToggle />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}