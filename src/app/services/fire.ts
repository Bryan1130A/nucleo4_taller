import { Service } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from './config';

@Service()
export class Fire {

    async getLibros(): Promise<any> {
        const datos = await getDocs(collection(db, "libros"))
        return datos.docs.map((d) => ({ id: d.id, ...d.data() }))
    }

    postLibro(libro: any) {
        return addDoc(collection(db, "libros"), libro)
    }

    putLibro(id: string, libro: any) {
        return updateDoc(doc(db, "libros", id), libro)
    }

    deleteLibro(id: string) {
        return deleteDoc(doc(db, "libros", id))
    }

    async getUsuarios(): Promise<any> {
        const datos = await getDocs(collection(db, "usuarios"))
        let usuarios: any[] = datos.docs.map((d) => ({ id: d.id, ...d.data() }))

        if (!usuarios.find((u) => u.email == "admin@libreria.com")) {
            const admin = { nombre: "admin", email: "admin@libreria.com", password: "1234", rol: "admin" }
            await addDoc(collection(db, "usuarios"), admin)
            usuarios.push(admin)
        }
        return usuarios
    }

    postUsuario(usuario: any) {
        return addDoc(collection(db, "usuarios"), usuario)
    }
}
