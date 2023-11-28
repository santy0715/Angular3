import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recuperation.component.html',
  styleUrl: './recuperation.component.css'
})
export class RecuperationComponent {
  nombreUsuarioRec: string = '';
  contrasenaRec: string = '';

  mensajeRecuperacion: string = '';

  constructor(
    public routeRec: Router
  ){}

  private obtenerListaUsuarios(): any[] {
    const listaUsuariosString = localStorage.getItem('listaUsuarios');
    return listaUsuariosString ? JSON.parse(listaUsuariosString) : [];
  }

  validarRec() {
   
    const listaUsuarios = this.obtenerListaUsuarios();

    const usuarioIndex = listaUsuarios.findIndex(usuario => usuario.nombre === this.nombreUsuarioRec);
  
    if (usuarioIndex !== -1) {

      listaUsuarios[usuarioIndex].contrasena = this.contrasenaRec;
  
      localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
  
      this.mensajeRecuperacion = 'Cambio de contraseña Realizado.';
      setTimeout(() => {
        this.routeRec.navigateByUrl('');
      }, 2000);
    } else {
      this.mensajeRecuperacion = 'Usuario no registrado.';
  
      setTimeout(() => {
        this.routeRec.navigateByUrl('register');
      }, 2000);
    }

    this.limpiarValores();
  }

  private limpiarValores() {
    this.nombreUsuarioRec = '';
    this.contrasenaRec = '';
  }
}