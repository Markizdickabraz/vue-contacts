import { createStore } from "vuex";
import { AuthModule } from "@/store/AuthModule";
import { ContactsModule } from "@/store/ContactsModule";

export default createStore({
    modules: {
        auth: AuthModule,
        contacts: ContactsModule,
    }
})