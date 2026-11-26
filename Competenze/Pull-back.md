---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["pullback", "f^*", "applicazione co-tangente", "cotangent map", "co-differenziale", "pull-back di una forma", "pull-back di una metrica"]
tags: [competenza, area/algebra-geometria]
---

# Pull-back

> Il pull-back $f^*$ riporta covettori, forme e metriche da arrivo a partenza componendo con $f_*$. In coordinate significa "sostituire $y=f(x)$ e differenziare", e la sua matrice è la trasposta della jacobiana.

## Definizione / enunciato
**Applicazione co-tangente.** È la duale di $f_*$:
$$f^*:T^*_{f(q)}\mathbb R^m\to T_q^*\mathbb R^n,\qquad f^*(\theta)=\theta\circ f_{*q}.$$
Si dimostra che la sua matrice, nelle basi $dy_i$ e $dx_j$, è $(J_qf)^T$.

**Pull-back di una forma** $W$ su $\mathbb R^m$: è la forma su $\Omega$ data da $(f^*W)_q=f^*(W_{f(q)})$.

**Pull-back di un tensore $(0,2)$:**
$$(f^*g)(X,Y)=g(f_*X,f_*Y),\qquad (f^*g)_{km}=g_{ij}J_{ik}J_{jm}.$$
**Attenzione:** se $g$ è una metrica, $f^*g$ può essere degenere e quindi non essere una metrica.

**Proposizione (dimostrata).** $f_*$ è iniettiva (risp. suriettiva) se e solo se $f^*$ è suriettiva (risp. iniettiva), perché le matrici sono $J$ e $J^T$.

## Formule chiave
$$f^*\big(\alpha\,d\xi+\beta\,d\eta\big)=(\alpha\xi_u+\beta\eta_u)\,du+(\alpha\xi_v+\beta\eta_v)\,dv,\qquad f^*(dh)=d(f^*h),\ \ f^*h:=h\circ f$$
La seconda formula non è dimostrata a lezione. In pratica: $f^*(du)=u_r\,dr+u_\varphi\,d\varphi$.

## Intuizione
I vettori si spingono avanti ($f_*$), le forme si tirano indietro ($f^*$). Si calcola in due modi: sostituendo e usando Leibniz $d(fg)=df\,g+f\,dg$, oppure con la trasposta della jacobiana. A lezione si fanno sempre entrambi come verifica.

## Come si usa
Esempi della lezione:
- $W=du+v\,dv$ in polari: $(\cos\varphi+r\sin^2\varphi)\,dr-r\sin\varphi(1-r\cos\varphi)\,d\varphi$.
- Metrica euclidea in polari: $f^*(du^2+dv^2)=dr^2+r^2d\varphi^2$.
- $f(x,y,z)=(x+y,x+z)$: $f^*(du^2+dv^2)=2dx^2+2dx\,dy+2dx\,dz+dy^2+dz^2$, che ha rango 2 e quindi non è una metrica.
- Superficie: $P^*(dx^2+dy^2+dz^2)=E\,du^2+2F\,du\,dv+G\,dv^2$, la prima forma fondamentale.
- $P=(u^2+v,u-v,uv)$ e $W=y\,dx+xz\,dy+\sin x\,dz$: il pull-back è riportato per esteso a lezione (L17 p. 14).

## Nei corsi
- **Geometria differenziale** (triennale): fonti
  - `triennale/ANNO 2/geometria differenziale/Lezione16_GD.pdf` (pp. 13-18);
  - `triennale/ANNO 2/geometria differenziale/Lezione17_GD.pdf` (pp. 1-14);
  - `triennale/ANNO 2/geometria differenziale/Lezione19_GD.pdf` (pp. 5-15).

## Prerequisiti
- [[Applicazione tangente]]: f^*θ = θ∘f_*
- [[Forma differenziale]]: oggetti che si tirano indietro
- [[Spazio duale]]: è l'applicazione duale, con matrice trasposta

## Porta a
- [[Metrica riemanniana]]: metriche indotte e metriche isometriche
- [[Prima forma fondamentale]]: P^* della metrica di R^3
- [[Teorema Egregio]]: isometria = metriche legate da un pull-back
- [[Integrale di linea]]: integrale di 2ª specie come ∫P^*(ω)

## Collegati
- [[Coordinate polari e cilindriche]]: forme e metriche riscritte in polari
