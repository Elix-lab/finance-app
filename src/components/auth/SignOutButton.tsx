/* Button for Signing Out */

import { signOutAction } from "@/_actions/auth/actions"

export const SignOutButton = () => {
    return (
        <form action={signOutAction}>
            <button type="submit">
                Sign Out
            </button>
        </form>
    )
}