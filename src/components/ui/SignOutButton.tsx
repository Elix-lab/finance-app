import { Button } from "./button"

export function SignOutButton() {

    const handleSignOut = async () => {
        await fetch('@/api/signOut', { method: 'POST' });
        window.location.href = '/signIn'
    }

    return (
        <Button onClick={handleSignOut}>
            Sign Out
        </Button>
    )
}