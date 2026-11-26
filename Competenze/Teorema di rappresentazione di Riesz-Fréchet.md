---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["Riesz representation theorem", "teorema di Riesz-Fréchet", "teorema di rappresentazione di Riesz", "Riesz-Fréchet theorem", "duale di uno spazio di Hilbert", "anti-isomorfismo isometrico"]
tags: [competenza, area/analisi]
---

# Teorema di rappresentazione di Riesz-Fréchet

> Ogni funzionale lineare continuo su uno spazio di Hilbert è il prodotto scalare con un vettore fissato: il duale di $H$ si identifica con $H$ stesso.

## Definizione / enunciato
**Teor. 8.7.** Sia $H$ di Hilbert su $\mathbb F$. La mappa $\Phi:H\to H'$, $\Phi(y)=\langle\cdot,y\rangle$, è un'**isometria antilineare suriettiva**:
(a) $\|\Phi(y)\|_{H'}=\|y\|_H$; (b) $\Phi(\alpha_1y_1+\alpha_2y_2)=\overline{\alpha_1}\Phi(y_1)+\overline{\alpha_2}\Phi(y_2)$; (c) $\Phi(H)=H'$.
Cioè: per ogni $\varphi\in H'$ esiste un unico $y\in H$ con $\varphi(x)=\langle x,y\rangle$ per ogni $x$, e $\|\varphi\|=\|y\|$.

## Formule chiave
Costruzione di $y$ per $\varphi\ne0$: $Y=\operatorname{Ker}\varphi$ è chiuso proprio, $H=Y\oplus Y^\perp$, e $Y^\perp=\operatorname{span}\{z\}$ con $\varphi(z)=1$; allora
$$P_{Y^\perp}x=\|z\|^{-2}\langle x,z\rangle z,\qquad\varphi(x)=\varphi(P_Yx)+\varphi(P_{Y^\perp}x)=\langle x,\|z\|^{-2}z\rangle,$$
quindi $\varphi=\Phi(\|z\|^{-2}z)$.
Se $\mathbb F=\mathbb R$, $\Phi$ è un isomorfismo isometrico; se $\mathbb F=\mathbb C$ è un anti-isomorfismo isometrico. Per $L^2$: $\Psi(g)(f)=\int_Mfg\,d\mu$ è un isomorfismo isometrico, quindi $L^2(M)'\cong L^2(M)$ e $(\ell^2)'\cong\ell^2$.

## Intuizione
Un funzionale continuo non nullo è determinato dal suo nucleo (un iperpiano chiuso) e dal valore su una direzione trasversale: in uno spazio di Hilbert la direzione "giusta" è quella ortogonale al nucleo, e il teorema della proiezione la fornisce.

## Come si usa
- Fondamento dell'operatore aggiunto: $y\mapsto\langle Ax,y\rangle$ è un funzionale, rappresentato da $A^*y$.
- Con Lax-Milgram generalizza a forme sesquilineari coercive (problemi variazionali).
- Dà la riflessività degli spazi di Hilbert e la caratterizzazione $x_n\rightharpoonup x\iff\langle x_n,y\rangle\to\langle x,y\rangle$ per ogni $y$.

## Nei corsi
- **Analisi funzionale** (triennale): §8.2 "Duale di uno spazio di Hilbert" (Teor. 8.7 con dimostrazione, Oss. 8.8). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 115-117); `triennale/ANNO 3/analisi funzionale/07_duale_handout.pdf` (p. 4).

## Prerequisiti
- [[Spazio di Hilbert]]: ambiente del teorema
- [[Teorema della proiezione]]: decomposizione H = Ker φ ⊕ (Ker φ)⊥
- [[Spazio duale]]: H' = B(H, F)

## Porta a
- [[Teorema di Lax-Milgram]]: generalizzazione a forme coercive
- [[Operatore aggiunto]]: esistenza di A*
- [[Spazio riflessivo]]: ogni Hilbert è riflessivo

## Collegati
- [[Isometria lineare]]: Φ è un'isometria (antilineare)
- [[Notazione di Dirac]]: in Quantum physics il bra ⟨y| è il funzionale ⟨·,y⟩
