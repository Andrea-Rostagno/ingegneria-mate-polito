---
tipo: competenza
area: numerica
corsi: [Metodi numerici, Numerical opt]
livello: [triennale, magistrale]
aliases: ["stopping criteria", "criteri d'arresto", "criterio d'arresto", "test di arresto", "tolleranza di arresto", "criterio sul residuo", "criterio sull'incremento"]
tags: [competenza, area/numerica]
---

# Criteri di arresto dei metodi iterativi

> Regole per decidere quando fermare una successione di approssimazioni: numero massimo di passi, tolleranza sull'incremento tra iterate, tolleranza sul residuo; nessuna è sempre affidabile.

## Definizione / enunciato
**Equazioni non lineari $f(x)=0$.**
- numero massimo di iterazioni $n_{\max}$;
- incremento: $|x_n-x_{n+1}|\le$ tol (assoluto) oppure $\le$ tol$\,|x_{n+1}|$ (relativo); può non essere affidabile se la convergenza è solo lineare;
- residuo: $|f(x_n)|\le$ ftol; ingannevole se $f$ è molto ripida (errore piccolo, $|f|$ grande) o molto piatta (errore grande, $|f|$ piccolo).

**Sistemi lineari $A\mathbf x=\mathbf b$.**
- $k_{\max}$; incremento $\|\mathbf x^{(\bar k+1)}-\mathbf x^{(\bar k)}\|\le$ tolr$\,\|\mathbf x^{(\bar k+1)}\|$ (tolr $\ge\varepsilon_m$) oppure $\le$ tola; ha senso quando il metodo converge "rapidamente";
- per i metodi di discesa, residuo: $\|\mathbf r^{(k)}\|_2\le$ tol$\,\|\mathbf b\|_2$ con tol $\ge$ eps $=2\varepsilon_m$.

## Formule chiave
Il residuo ha senso perché $\mathbf r^{(k)}=A\mathbf e^{(k)}$, quindi $\mathbf e^{(k)}=\mathbf o\iff\mathbf r^{(k)}=\mathbf o$. Se $\|\mathbf r^{(k)}\|_2\le$ eps$\|\mathbf b\|_2$ l'iterata non cambia più in aritmetica di macchina. Il limite del criterio è
$$\frac{\|\mathbf e^{(k)}\|_2}{\|\mathbf x^*\|_2}\le K_2(A)\frac{\|\mathbf r^{(k)}\|_2}{\|\mathbf b\|_2}.$$
Punto fisso con costante $m$: $|\alpha-x_{n+1}|\le\frac m{1-m}|x_{n+1}-x_n|$, quindi per $m\le1/2$ l'incremento maggiora l'errore.

## Intuizione
Si vuole controllare l'errore, che non è calcolabile; incremento e residuo ne sono indicatori. Se il problema è mal condizionato (o la convergenza è lenta) entrambi possono essere piccoli mentre l'errore è grande.

## Come si usa
Tutte le function del corso restituiscono un flag `ier`: 1 se la tolleranza è raggiunta, 0 se si esce per il numero massimo di passi (Jacobi, Gauss-Seidel e SOR danno $-1$ se $A$ ha un elemento diagonale nullo).

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_04_sistemi_non_lineari_print.pdf` (p. 14-16, 43); `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 47, 76, 81).
- **Numerical opt** (magistrale): un criterio di arresto è una regola automatica, per esempio sulla distanza relativa tra iterati. Il numero massimo di iterazioni è una salvaguardia, non un criterio. Per i sistemi lineari:
  - il criterio sul residuo è $\|r^{(k)}\|\le\text{TOL}\,\|b\|$, che coincide con $\le\text{TOL}\,\|r^{(0)}\|$ se $x^{(0)}=0$;
  - attenzione: $\frac{\|x^{(k)}-x^*\|}{\|x^*\|}\le K(A)\frac{\|r^{(k)}\|}{\|b\|}$;
  - valori tipici in doppia precisione per un criterio relativo: TOL $=10^{-4}$ (precisione grezza), $10^{-8}$ (buona), $10^{-12}$ (molto buona, spesso inutile). TOL $=\varepsilon_m$ o inferiore non è accettabile.

  In ottimizzazione:
  - **Newton inesatto:** si usa una tolleranza adattiva $\eta_k\|\nabla f(x^{(k)})\|$ (vedi [[Metodo di Newton inesatto]]);
  - **sistemi non lineari:** conviene combinare un criterio sul residuo $\|F\|$ e uno sulla distanza tra iterati;
  - **gradiente proiettato:** si usa $\Pi_X(x-\alpha\nabla f)=x$.

  Fonti: `magistrale/Numerical opt/Pieraccini/Part_1_Lectures_Pieraccini_Intro_and_Linear_systems.pdf` (p. 19, 33-37); `magistrale/Numerical opt/Pieraccini/Part_4_Nonlinear_equations_and_Nonlinear_Least_Squares.pdf` (p. 8-9).

## Prerequisiti
- [[Precisione di macchina]]: la tolleranza non può scendere sotto $\varepsilon_m$
- [[Errore assoluto e relativo]]: tolleranze assolute e relative

## Porta a
- Nessuno.

## Collegati
- [[Ordine di convergenza di un metodo iterativo]]: con convergenza lineare l'incremento sottostima l'errore
- [[Condizionamento di un sistema lineare]]: residuo piccolo non implica errore piccolo
- [[Metodo del punto fisso]]: stima dell'errore tramite l'incremento
- [[Metodo del gradiente]]: usa il criterio sul residuo
