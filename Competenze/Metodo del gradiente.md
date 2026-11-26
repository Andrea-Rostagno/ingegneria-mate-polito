---
tipo: competenza
area: numerica
corsi: [Metodi numerici, Ricerca operativa, Matematica per l'AI, Numerical opt, Data science lab]
livello: [triennale, magistrale]
aliases: ["steepest descent", "gradient method", "metodo della massima pendenza", "metodo del gradiente per sistemi lineari", "norma dell'energia"]
tags: [competenza, area/numerica]
---

# Metodo del gradiente

> Metodo di discesa per sistemi simmetrici definiti positivi che a ogni passo si muove lungo il residuo, cioè nella direzione di massima decrescita del funzionale $\varphi$.

## Definizione / enunciato
Si sceglie $\mathbf d^{(k)}=-\nabla\varphi(\mathbf x^{(k)})=\mathbf r^{(k)}$ ("steepest descent"):
$$\mathbf x^{(k+1)}=\mathbf x^{(k)}+\alpha_k\mathbf r^{(k)},\quad \alpha_k=\frac{(\mathbf r^{(k)})^T\mathbf r^{(k)}}{(\mathbf r^{(k)})^TA\mathbf r^{(k)}},\quad \mathbf r^{(k+1)}=\mathbf r^{(k)}-\alpha_kA\mathbf r^{(k)} .$$
Due residui consecutivi sono ortogonali, $(\mathbf r^{(k+1)})^T\mathbf r^{(k)}=0$; due direzioni alternate sono parallele.

**Teorema.** Siano $\lambda_{\max},\lambda_{\min}$ gli autovalori estremi di $A$ sdp e $K_2(A)=\lambda_{\max}/\lambda_{\min}$. Il metodo converge per ogni $\mathbf x^{(0)}$ e, con la norma dell'energia $\|\mathbf x\|_A=\sqrt{\mathbf x^TA\mathbf x}$,
$$\|\mathbf e^{(k)}\|_A\le\left(\frac{K_2(A)-1}{K_2(A)+1}\right)^k\|\mathbf e^{(0)}\|_A .$$

## Formule chiave
Fattore di riduzione $\frac{K_2-1}{K_2+1}=1-\frac2{K_2+1}<1$. Con $K_2(A)=1$ converge in un passo; con $K_2(A)\gg1$ può essere molto lento e il numero di iterazioni è proporzionale a $K_2(A)$. Costo: un prodotto matrice-vettore per passo, totale circa $kn^2$.

## Intuizione
Con curve di livello molto allungate la direzione di massima pendenza locale non punta al centro: le iterate procedono a zig-zag con passi ortogonali.

## Come si usa
Esempio delle slide: $A=\mathrm{diag}(1,5)$, $\mathbf b=(1,5)^T$, $\mathbf x^{(0)}=(0.6,0.6)^T$: traiettoria a zig-zag; con $\lambda_1=\lambda_2=1$ si arriva in $\mathbf x^*$ in una iterazione. Function `gradiente(A,b,x,tol,kmax)` con arresto $\|\mathbf r\|\le$ `tol`$\,\|\mathbf b\|$. Per stabilità conviene ogni tanto ricalcolare $\mathbf r^{(k+1)}=\mathbf b-A\mathbf x^{(k+1)}$.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 71-81); codice `triennale/ANNO 2/metodi numerici/gradiente.m`.
- **Ricerca operativa** (triennale): steepest descent per una $f$ differenziabile qualsiasi, $\mathbf x^{(k+1)}=\mathbf x^{(k)}-\alpha^{(k)}\nabla f(\mathbf x^{(k)})$, arresto con $\|\nabla f(\mathbf x^{(k)})\|_\infty<\epsilon$, passo con line search esatta o backtracking. Con line search esatta le direzioni successive sono ortogonali: $\nabla f(\mathbf x^{(k+1)})^T\nabla f(\mathbf x^{(k)})=0$. **Zig-zag:** per $f=\frac12(x_1^2+\gamma x_2^2)$ da $\mathbf x^{(0)}=(\gamma,1)$, $x_1^{(k)}=\gamma\big(\frac{\gamma-1}{\gamma+1}\big)^k$, $x_2^{(k)}=\big(-\frac{\gamma-1}{\gamma+1}\big)^k$, $f(\mathbf x^{(k)})=\big(\frac{\gamma-1}{\gamma+1}\big)^{2k}f(\mathbf x^{(0)})$ (figura con $\gamma=20$). **Convergenza su un QP** $f=\frac12\mathbf x^TQ\mathbf x$, $Q\in S_{++}$, autovalori estremi $m$, $M$: $\|\mathbf x^{(k+1)}\|_2/\|\mathbf x^{(k)}\|_2\le\max\{|1-\alpha^{(k)}m|,|1-\alpha^{(k)}M|\}$, minimizzato da $\alpha^*=2/(M+m)$ con fattore $(M-m)/(M+m)$: difficoltà quando $M/m$ è grande. Interpretato anche come Newton con hessiana sostituita da $I_n/\alpha$. Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 12-17, 20); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 24).
- **Matematica per l'AI** (triennale): addestramento di una rete neurale minimizzando la training loss $\ell_\tau(\boldsymbol\theta)$: $\boldsymbol\theta_{t+1}=\boldsymbol\theta_t-\alpha_t\mathbf u_t$, $\mathbf u_t=\partial\ell_\tau/\partial\boldsymbol\theta(\boldsymbol\theta_t)$ calcolato con la backpropagation, $\alpha_t$ **learning rate**. Nell'algoritmo delle slide il passo è di **Barzilai-Borwein**: con $\mathbf g=\mathbf u_t-\mathbf u_{t-1}$ e $\boldsymbol\delta$ l'ultimo spostamento, se $\boldsymbol\delta^\top\mathbf g>0$ si pone $\alpha=\boldsymbol\delta^\top\mathbf g/\|\mathbf g\|^2$, altrimenti $\alpha\leftarrow2\alpha$ (euristica). Nel laboratorio `MLP.ipynb` lo steepest descent $\mathbf x_{k+1}=\mathbf x_k-\alpha_k\nabla f(\mathbf x_k)$ è presentato con la definizione di direzione di discesa e i suoi problemi (convergenza solo a minimi locali, dipendenza da $\mathbf x_0$ e dai passi). Fonti: `triennale/ANNO 3/matematica AI/neurtrain.pdf` (p. 3-4, 6); `MLP.ipynb`.
- **Numerical opt** (magistrale):
  - **Per $Ax=b$ SPD:** passo esatto $\alpha^{(k)}=\frac{r^{(k)T}r^{(k)}}{r^{(k)T}Ar^{(k)}}$, versione con un solo prodotto matrice-vettore ($r^{(k+1)}=r^{(k)}-\alpha^{(k)}Ar^{(k)}$) e stima $\|x^{(k)}-x^*\|_A\le\big(\frac{K(A)-1}{K(A)+1}\big)^k\|x^{(0)}-x^*\|_A$.
  - **Per $f$ generica:** steepest descent $p^{(k)}=-\nabla f(x^{(k)})$. Teorema (NW 3.4): con line search esatta, se $x^{(k)}\to x^*$ con $\nabla^2f(x^*)$ definita positiva e $\frac{\lambda_n-\lambda_1}{\lambda_n+\lambda_1}<r<1$, allora per $k$ grande $f(x^{(k+1)})-f(x^*)\le r^2\big(f(x^{(k)})-f(x^*)\big)$, un comportamento quasi lineare.
  - **Convergenza globale:** dal [[Teorema di Zoutendijk]].
  - **In laboratorio:** prima a passo fisso, poi con backtracking; la versione vincolata è il [[Metodo del gradiente proiettato]].

  Fonti: `magistrale/Numerical opt/Pieraccini/Part_1_Lectures_Pieraccini_Intro_and_Linear_systems.pdf` (p. 24-30, 37); `magistrale/Numerical opt/Pieraccini/Part_2_Lectures_Pieraccini_Nonlinear_Opt_0th_order_1st_order_methods.pdf` (p. 9-11); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§3.1, §4, §5); codice d'esempio `DellaSanta/labs/steepest_descent.m`, `steepest_desc_bcktrck.m`.
- **Data science lab** (magistrale): presentato come "gradient descent" per addestrare le reti: si sceglie una loss $\mathcal L(\theta)$ (es. $MSE(\theta)=\frac1n\sum(y_i-\theta^Tx_i)^2$); se non è risolubile in forma chiusa si parte da un $\theta_0$ casuale e si aggiorna $\theta_{t+1}:=\theta_t-\alpha\nabla_\theta\mathcal L(\theta_t)$ ($\alpha$ learning rate, dimensione del passo). Limiti: sensibile all'inizializzazione, può bloccarsi in minimi locali (per loss convesse ogni inizializzazione porta al minimo globale, caso raro); rimedi: momento, learning rate adattivi, schedule del learning rate. Fonti: `magistrale/Data science lab/slide testo/DSML-Deep-Learning-Intro.pdf` (p. 15-19).

## Prerequisiti
- [[Metodi di discesa]]: passo ottimale $\alpha_k$ con $\mathbf d^{(k)}=\mathbf r^{(k)}$
- [[Gradiente]]: direzione di massima decrescita
- [[Condizionamento di un sistema lineare]]: la velocità dipende da $K_2(A)$

## Porta a
- [[Metodo del gradiente coniugato]]: corregge lo zig-zag con direzioni A-coniugate

## Collegati
- [[Criteri di arresto dei metodi iterativi]]: arresto sul residuo, inaffidabile se A è mal condizionata
- [[Autovalori e autovettori]]: $K_2(A)=\lambda_{\max}/\lambda_{\min}$ per A sdp
- [[Backtracking line search]]: scelta del passo nella versione per $f$ generica (Ricerca operativa)
- [[Metodo di Newton in ottimizzazione]]: lo steepest descent è Newton con hessiana $I/\alpha$ (Ricerca operativa)
- [[Metodo del subgradiente]]: analogo per funzioni non differenziabili (Ricerca operativa)
- [[Discesa stocastica del gradiente]]: versione con gradiente stimato su minibatch (Matematica per l'AI)
- [[Backpropagation]]: calcola il gradiente della loss di una rete (Matematica per l'AI)
