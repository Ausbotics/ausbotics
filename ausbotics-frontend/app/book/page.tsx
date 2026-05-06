// import { AppointmentBooking } from "@/components/appointment-booking";

// export default function BookSchedule() {
//     return <AppointmentBooking />
// }

import { AppointmentBooking } from "@/components/appointment-booking";
import { SiteFooter } from "@/components/site-footer";

export default function BookSchedule() {
    return (
        <main className="min-h-screen">
            <AppointmentBooking />
            <SiteFooter />
        </main>
    )
}
