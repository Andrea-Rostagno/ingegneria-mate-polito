---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Numerical opt]
livello: [triennale, magistrale]
aliases: ["backtracking", "line search", "ricerca in linea", "line search esatta", "exact line search", "lunghezza del passo", "step length", "condizione di decrescita sufficiente", "condizione di Armijo", "Armijo condition", "inexact line search", "line search inesatta"]
tags: [competenza, area/ottimizzazione]
---

# Backtracking line search

> Scelta del passo $\alpha$ lungo una direzione di discesa: si parte da un passo aggressivo e lo si contrae finché la decrescita effettiva non raggiunge una frazione di quella prevista dalla linearizzazione.

## Definizione / enunciato
Nel metodo $\mathbf x^{(k+1)}=\mathbf x^{(k)}-\alpha^{(k)}\nabla f(\mathbf x^{(k)})$ il passo si può scegliere:
- con **line search esatta**: $\min_{\alpha\ge0}h^{(k)}(\alpha)=f\big(\mathbf x^{(k)}-\alpha\nabla f(\mathbf x^{(k)})\big)$;
- con **backtracking** (approssimato): fissati $t\in(0,0.5)$ e $c\in(0,1)$, si parte da $\alpha$ grande e si pone $\alpha\leftarrow c\alpha$ finché
$$f\big(\mathbf x-\alpha\nabla f(\mathbf x)\big)>f(\mathbf x)-t\alpha\|\nabla f(\mathbf x)\|_2^2 .$$

## Formule chiave
Al primo ordine $f(\mathbf x+\alpha\mathbf d)\approx f(\mathbf x)+\alpha\nabla f(\mathbf x)^T\mathbf d=f(\mathbf x)-\alpha\|\nabla f(\mathbf x)\|_2^2$ per $\mathbf d=-\nabla f(\mathbf x)$. La retta target $f(\mathbf x)-t\alpha\|\nabla f\|_2^2$ ha pendenza ridotta del fattore $t$.

## Intuizione
La tangente a $h(\alpha)$ in $\alpha=0$ promette una decrescita troppo ottimistica (per $f$ convessa). Esiste un $\alpha_0$ che separa due regioni: per $\alpha\in[0,\alpha_0]$ il valore vero è migliore della retta target, oltre è peggiore. Il backtracking accetta il primo passo che cade nella regione buona; termina in un numero finito di iterazioni.

## Come si usa
Si usa dentro il metodo del gradiente (o di Newton) quando la line search esatta è costosa. Con line search esatta, nello steepest descent le direzioni successive risultano ortogonali, il che produce lo zig-zag.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 12-13).
- **Numerical opt** (magistrale): direzione $p^{(k)}$ di discesa qualsiasi e **condizione di Armijo**
  $$f(x^{(k)}+\alpha p^{(k)})\le f(x^{(k)})+c_1\alpha\nabla f(x^{(k)})^Tp^{(k)},\qquad c_1\in(0,1),$$
  con $c_1=10^{-4}$ in laboratorio. Backtracking: $\alpha_{j+1}=\rho\alpha_j$ con $\rho\in[\rho_l,\rho_u]\subset(0,1)$ e numero massimo di contrazioni.
  - **Esempio delle note:** con $\rho=\frac12$, dopo circa 50 contrazioni $\rho^m\approx10^{-16}$. Con $x^{(k)}=10$ e $p^{(k)}=1$, in doppia precisione $10+2^{-50}=10$: il passo è nullo e non va accettato.
  - **Scelta di $\alpha_0$:** $\alpha_0=1$ è cruciale per Newton e quasi-Newton, per mantenere la convergenza del secondo ordine.

  Armijo da sola non esclude passi troppo corti: in teoria si aggiunge la condizione di curvatura ([[Condizioni di Wolfe]]). Applicata alla [[Funzione di merito]] globalizza Newton per sistemi. Fonti: `magistrale/Numerical opt/Pieraccini/Part_2_Lectures_Pieraccini_Nonlinear_Opt_0th_order_1st_order_methods.pdf` (p. 17-25); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§5.1, Remark 5.1, §6.2).

## Prerequisiti
- [[Metodi di discesa]]: si sceglie il passo lungo una direzione di discesa
- [[Differenziabilità in più variabili]]: approssimazione al primo ordine

## Porta a
- [[Metodo del gradiente]]: scelta del passo nello steepest descent

## Collegati
- [[Metodo di Newton in ottimizzazione]]: anche Newton può richiedere un controllo del passo
- [[Metodo trust region]]: alternativa che limita il passo con un raggio
