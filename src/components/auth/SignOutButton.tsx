import { signOutAction } from "@/_actions/auth/actions"
import { Button } from "../ui/button"

export function SignOutButton() {

    return (
        <form action={signOutAction}>
            <Button type="submit">
                Sign Out
            </Button>
        </form>
    )
}