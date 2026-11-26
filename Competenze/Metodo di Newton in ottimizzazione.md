---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Matematica per l'AI, Numerical opt]
livello: [triennale, magistrale]
aliases: ["Newton's method in optimization", "metodo di Newton per l'ottimizzazione", "quasi-Newton methods", "BFGS", "DFP", "Levenberg-Marquardt"]
tags: [competenza, area/ottimizzazione]
---

# Metodo di Newton in ottimizzazione

> Metodo che minimizza a ogni passo il modello quadratico di Taylor della funzione obiettivo; equivale a Newton per sistemi applicato a $\nabla f=\mathbf 0$. Converge rapidamente vicino alla soluzione ma non globalmente.

## Definizione / enunciato
Modello locale al secondo ordine:
$$f\big(\mathbf x^{(k)}+\boldsymbol\delta\big)\approx f\big(\mathbf x^{(k)}\big)+\nabla f\big(\mathbf x^{(k)}\big)^T\boldsymbol\delta+\tfrac12\boldsymbol\delta^TH\big(\mathbf x^{(k)}\big)\boldsymbol\delta .$$
Se l'hessiana $H$ è definita positiva, lo spostamento ottimo risolve
$$H\big(\mathbf x^{(k)}\big)\boldsymbol\delta=-\nabla f\big(\mathbf x^{(k)}\big),\qquad\mathbf x^{(k+1)}=\mathbf x^{(k)}+\boldsymbol\delta .$$

## Formule chiave
Con $\mathbf g(\mathbf x)=\nabla f(\mathbf x)=\mathbf 0_n$, Newton per sistemi dà $\mathbf x^{(k+1)}=\mathbf x^{(k)}-[D\mathbf g(\mathbf x^{(k)})]^{-1}\mathbf g(\mathbf x^{(k)})$, dove la jacobiana $D\mathbf g$ è l'hessiana di $f$.

**Legame con lo steepest descent:** sostituendo l'hessiana con $I_n/\alpha$, $f(\mathbf x+\boldsymbol\delta)\approx f(\mathbf x)+\nabla f(\mathbf x)^T\boldsymbol\delta+\frac1{2\alpha}\|\boldsymbol\delta\|_2^2$ e la condizione del primo ordine dà $\boldsymbol\delta=-\alpha\nabla f(\mathbf x)$.

## Intuizione
Lo steepest descent è un Newton "semplicistico": l'ultimo termine è una penalità di prossimità che impedisce di andare all'infinito minimizzando la sola linearizzazione; la lunghezza del passo è inversamente legata alla penalità.

## Come si usa
Difficoltà: calcolo e inversione dell'hessiana costosi; hessiana non definita positiva o non invertibile; il nuovo punto può essere peggiore. Rimedi: metodi **quasi-Newton** con approssimazioni dell'hessiana (DFP, BFGS) e **Levenberg-Marquardt** per minimi quadrati non lineari $F(\mathbf x)=\sum_kf_k^2(\mathbf x)$ (usato anche per addestrare reti neurali); per la globalizzazione, i metodi trust region.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 18-20).
- **Matematica per l'AI** (triennale): Newton $\boldsymbol\theta_{t+1}=\boldsymbol\theta_t-\mathbf H_t^{-1}\mathbf u_t$ per la training loss di una rete neurale è impraticabile per $d$ grande ($O(d^2)$ per l'hessiana, $O(d^3)$ per la direzione); il quasi-Newton BFGS approssima $\mathbf H_t^{-1}$ con matrici $\mathbf C_t$ che verificano la condizione delle secanti, e la versione a memoria limitata ha una nota propria. Fonti: `triennale/ANNO 3/matematica AI/neurtrain.pdf` (p. 6-8).
- **Numerical opt** (magistrale): modello $m_k(p)=f(x^{(k)})+\nabla f(x^{(k)})^Tp+\frac12p^T\nabla^2f(x^{(k)})p$ e passo $\nabla^2f(x^{(k)})p_N=-\nabla f(x^{(k)})$.
  - **Teorema** (NW 3.5, ipotesi semplificate): sia $f\in C^3$ vicino a un $x^*$ con $\nabla f(x^*)=0$ e $\nabla^2f(x^*)$ definita positiva. Se $x^{(0)}$ è abbastanza vicino, $x^{(k)}\to x^*$ quadraticamente e $\|\nabla f(x^{(k)})\|\to0$ quadraticamente.
  - **Svantaggi:**
    1. sensibilità a $x^{(0)}$;
    2. serve l'hessiana definita positiva;
    3. costo dell'hessiana (3.1) e del sistema lineare (3.2).
  - **Rimedi:**
    - line search (Wolfe o Armijo con $\alpha_0=1$), con convergenza dal [[Teorema di Zoutendijk]];
    - [[Metodo di Newton modificato]] e [[Metodo di Newton troncato]] per l'hessiana non definita positiva;
    - [[Metodo di Newton inesatto]] per il costo del sistema;
    - [[Metodi quasi-Newton]] per il costo dell'hessiana.

  Fonti: `magistrale/Numerical opt/Pieraccini/Part_3_Nonlinear_Opt_2nd_order_methods.pdf` (p. 1-6); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§6); codice d'esempio `DellaSanta/labs/newton_bcktrck.m`.

## Prerequisiti
- [[Metodo di Newton per sistemi]]: applicato alle condizioni di stazionarietà
- [[Formula di Taylor in più variabili]]: modello quadratico locale
- [[Classificazione dei punti critici]]: serve l'hessiana definita positiva

## Porta a
- [[Metodo trust region]]: modello quadratico con passo limitato

## Collegati
- [[Metodo del gradiente]]: caso con hessiana sostituita da $I/\alpha$
- [[Metodo di Newton]]: versione per una equazione scalare
- [[Rete neurale artificiale]]: Levenberg-Marquardt usato per l'addestramento
- [[Metodo L-BFGS]]: BFGS a memoria limitata per l'addestramento delle reti (Matematica per l'AI)
