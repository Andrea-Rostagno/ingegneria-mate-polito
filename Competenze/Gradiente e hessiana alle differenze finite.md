---
tipo: competenza
area: numerica
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["finite difference gradient", "finite difference Hessian", "finite difference Jacobian", "gradiente alle differenze finite", "hessiana alle differenze finite", "jacobiana alle differenze finite", "scelta del passo h", "choice of h"]
tags: [competenza, area/numerica]
---

# Gradiente e hessiana alle differenze finite

> Approssimazione componente per componente del gradiente, dell'hessiana e della jacobiana di una funzione di più variabili con rapporti incrementali lungo i versori $e_i$, con una scelta del passo $h$ che bilancia troncamento e cancellazione.

## Definizione / enunciato
Sia $f:\mathbb R^n\to\mathbb R$ di classe $C^1$ (per l'hessiana $C^2$, così che $H_f$ sia simmetrica). Per ogni $i=1,\dots,n$ la derivata parziale in $\hat x$ si approssima con:
- **differenze in avanti** (FW-FD): una valutazione in più per componente, quindi $n+1$ valutazioni per tutto il gradiente;
- **differenze centrate** (C-FD): due valutazioni per componente, più accurate.

Per $F=(f_1,\dots,f_m):\mathbb R^n\to\mathbb R^m$ la stessa idea dà una colonna della jacobiana alla volta.

## Formule chiave
Gradiente:
$$\frac{\partial f}{\partial x_i}(\hat x)\approx\frac{f(\hat x+he_i)-f(\hat x)}{h},\qquad \frac{\partial f}{\partial x_i}(\hat x)\approx\frac{f(\hat x+he_i)-f(\hat x-he_i)}{2h}.$$
Hessiana:
$$(H_f)_{ii}(\hat x)\approx\frac{f(\hat x+he_i)-2f(\hat x)+f(\hat x-he_i)}{h^2},$$
$$(H_f)_{ij}(\hat x)\approx\frac{f(\hat x+he_i+he_j)-f(\hat x+he_i)-f(\hat x+he_j)+f(\hat x)}{h^2},\quad i\ne j.$$
Jacobiana, $j$-esima colonna: $(J_F)_{:,j}(\hat x)\approx\dfrac{F(\hat x+he_j)-F(\hat x)}{h}$ (o la versione centrata con $2h$).

**Scelta di $h$.** Per FW-FD il compromesso suggerito è $h=\sqrt{\varepsilon_m}$, oppure $h_i=\sqrt{\varepsilon_m}\,|\hat x_i|$ per la componente $i$; per l'hessiana, a causa di $h^2$ al denominatore, si prende un passo più grande, ad esempio $h=\sqrt{h_{\text{grad}}}$.

## Intuizione
Un $h$ grande dà un errore di troncamento grande; un $h$ troppo piccolo fa sottrarre due numeri quasi uguali e l'errore di arrotondamento esplode. Il passo ottimo sta nel mezzo, e dipende dalla scala di $\hat x_i$.

## Come si usa
- Al posto del gradiente esatto nei metodi di discesa, quando questo non è disponibile.
- Per problemi di grandi dimensioni (funzione di Rosenbrock estesa) non si valuta $f$ intera $n$ volte. Si sfrutta la struttura: $f(\hat x+he_i)-f(\hat x)$ coinvolge solo i pochi addendi che contengono $x_i$.
- Se $J_F$ è sparsa si possono approssimare più colonne con una sola valutazione.
- Per l'implementazione conviene valutare $f$ in molti punti insieme con operazioni vettoriali, senza cicli `for`.

## Nei corsi
- **Numerical opt** (magistrale): laboratorio 2 di F. Della Santa. L'hessiana FD si costruisce anche come esempio di metodo quasi-Newton ("finite difference Newton", P3). Fonti: `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§2.1-2.3); `magistrale/Numerical opt/DellaSanta/2025-10-08-Nota-14-25_annotato.pdf` (riepilogo FD 1D); `magistrale/Numerical opt/DellaSanta/2026-01-08-Nota-11-10_annotato.pdf` (differenze finite per Rosenbrock sfruttando la struttura); `magistrale/Numerical opt/Laboratorio/02 - Differrenze finite.pdf` (implementazione vettoriale); codice d'esempio `DellaSanta/labs/findiff_grad.m`, `findiff_Hess.m`, `findiff_J.m`.

## Prerequisiti
- [[Formule di derivazione numerica]]: le formule 1D applicate lungo ogni versore
- [[Cancellazione numerica]]: motivo per cui $h$ non può essere troppo piccolo
- [[Precisione di macchina]]: $\varepsilon_m$ fissa la scala del passo ottimo

## Porta a
- [[Metodi quasi-Newton]]: l'hessiana alle differenze finite è il primo esempio di approssimazione dell'hessiana

## Collegati
- [[Differenziazione automatica]]: alternativa esatta a meno dell'arrotondamento, senza scelta di $h$
- [[Matrice sparsa]]: con jacobiana sparsa si stimano più colonne per valutazione
- [[Matrice jacobiana]]: l'oggetto approssimato colonna per colonna
