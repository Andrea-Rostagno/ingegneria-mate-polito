---
tipo: competenza
area: fisica
corsi: [Fisica 1, Analisi 2]
livello: [triennale]
aliases: ["polar coordinates", "cylindrical coordinates", "velocità radiale", "velocità trasversa", "accelerazione radiale", "accelerazione trasversa"]
tags: [competenza, area/fisica]
---

# Coordinate polari e cilindriche

> Descrizione del moto con distanza dall'origine $r$ e angolo $\vartheta$ (più la quota $z$ nelle cilindriche): i versori dipendono dal tempo e la velocità si spezza in componente radiale e trasversa.

## Definizione / enunciato
In coordinate cilindriche il punto è individuato da $r$, $\vartheta$, $z$ con versori $\hat\lambda$ (radiale), $\hat\mu$ (trasverso), $\hat k$. Poiché $\hat\lambda$ e $\hat\mu$ ruotano, prima si calcolano le loro derivate ($\dot{\hat\lambda}=\dot\vartheta\hat\mu$, $\dot{\hat\mu}=-\dot\vartheta\hat\lambda$) e poi si deriva la posizione $\vec r=r\hat\lambda+z\hat k$. Le coordinate polari sono il caso piano (si elimina $z$). Notazione alternativa: $\hat u_r$, $\hat u_\theta$.

## Formule chiave
$$\vec v=\dot r\,\hat\lambda+r\dot\vartheta\,\hat\mu\quad(v_R=\dot r,\ v_\vartheta=r\dot\vartheta)$$
$$\vec a=(\ddot r-r\dot\vartheta^2)\,\hat\lambda+(2\dot r\dot\vartheta+r\ddot\vartheta)\,\hat\mu$$

## Intuizione
Anche a $r$ costante c'è un'accelerazione radiale $-r\dot\vartheta^2$ (centripeta); il termine $2\dot r\dot\vartheta$ nasce dal fatto che sia $r$ sia la direzione cambiano.

## Come si usa
Esercizio 3 (pp. 26-30): auto su pista circolare di raggio $R=2$ km con tachimetro costante $v_0$. Con $r=R$ costante e $\dot\vartheta=v_0/R$ resta solo l'accelerazione radiale, di modulo $v_0^2/R$.

## Nei corsi
- **Fisica 1** (triennale): lezione del 9/03/2022; all'orale si chiede la dimostrazione di velocità e accelerazione in componenti polari. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Cinematica_punto_materiale/Cinematica_Lezione2.pdf` (pp. 3-30).
- **Analisi 2** (triennale): $x=r\cos\theta$, $y=r\sin\theta$ ($r\ge0$, $\theta\in[0,2\pi)$) come strumento di calcolo. Servono a verificare i limiti in $(0,0)$ (ad esempio $\frac{x^2y}{x^2+y^2}=r\cos^2\theta\sin\theta$); con la regola della catena danno $\partial_rf=\nabla f\cdot(\cos\theta,\sin\theta)$ e $\partial_\theta f=r\,\nabla f\cdot(-\sin\theta,\cos\theta)$; negli integrali doppi danno il fattore $|\det J|=r$. Le cilindriche $(r,\theta,z)$ hanno anch'esse $|\det J|=r$ negli integrali tripli. Fonti: `triennale/ANNO 2/analisi 2/AII 02 2022 continuita e derivate parziali.pdf` (pp. 7-8); `triennale/ANNO 2/analisi 2/AII 07 2022 integrali doppi.pdf` (pp. 2-5); `triennale/ANNO 2/analisi 2/AII 08 2022 integrali doppi.pdf` (pp. 9-13); `triennale/ANNO 2/analisi 2/AII 10 2022 coord sferiche e int linea.pdf` (pp. 2-3).

## Prerequisiti
- [[Velocità e accelerazione]]: si deriva la posizione su versori mobili
- [[Formule di Poisson]]: derivate dei versori radiale e trasverso

## Porta a
- [[Moto circolare]]: r=R costante e angolo variabile
- [[Leggi di Keplero]]: L si scrive con la velocità trasversa

## Collegati
- [[Limiti e continuità in più variabili]]: coordinate polari per i limiti in (0,0) (Analisi 2)
- [[Regola della catena in più variabili]]: ∂f/∂r e ∂f/∂θ (Analisi 2)
- [[Cambiamento di variabili negli integrali multipli]]: |det J| = r per polari e cilindriche (Analisi 2)
