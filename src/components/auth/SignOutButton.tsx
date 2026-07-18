import { signOutAction } from "@/_actions/auth/actions"
import { Button } from "../ui/shadCn/button"

export function SignOutButton() {
    return (
        <form action={signOutAction}>
            <button type="submit">
                Sign Out
            </button>
        </form>
    )
}