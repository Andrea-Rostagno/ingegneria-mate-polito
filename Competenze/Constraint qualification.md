---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Numerical opt]
livello: [triennale, magistrale]
aliases: ["constraint qualifications", "qualificazione dei vincoli", "condizione di Slater", "Slater condition", "LICQ", "indipendenza lineare dei gradienti attivi", "cono tangente", "tangent cone", "direzione ammissibile limite"]
tags: [competenza, area/ottimizzazione]
---

# Constraint qualification

> Condizioni sui vincoli attivi che garantiscono che le direzioni ammissibili si possano descrivere con i gradienti linearizzati; senza di esse un minimo può non soddisfare le condizioni KKT.

## Definizione / enunciato
Data una successione ammissibile $\mathbf x^{(k)}\to\hat{\mathbf x}$, $\mathbf x^{(k)}-\hat{\mathbf x}=t^{(k)}\boldsymbol\delta^{(k)}$ con $\|\boldsymbol\delta^{(k)}\|_2=1$, $t^{(k)}\to0$, il limite $\boldsymbol\delta$ di $\boldsymbol\delta^{(k)}$ è una direzione ammissibile; con il vettore nullo formano il **cono tangente** $\mathcal F(\hat{\mathbf x})$. L'insieme linearizzato è
$$\bar{\mathcal F}(\hat{\mathbf x})=\{\boldsymbol\delta\ne\mathbf 0:\boldsymbol\delta^T\nabla h_i(\hat{\mathbf x})=0,\ i\in E;\ \boldsymbol\delta^T\nabla g_i(\hat{\mathbf x})\le0,\ i\in I_a(\hat{\mathbf x})\}.$$
Vale $\mathcal F\subseteq\bar{\mathcal F}$, ma non sempre l'uguaglianza: le constraint qualification la garantiscono.

## Formule chiave
Esempi di constraint qualification:
- gradienti dei vincoli attivi linearmente indipendenti in $\hat{\mathbf x}$;
- vincoli attivi lineari;
- uguaglianze lineari, disuguaglianze convesse ed esistenza di un punto con $g_i(\hat{\mathbf x})<0$ per ogni $i\in I$ (**condizione di Slater**).

## Intuizione
Un minimo locale è caratterizzato da $D(\mathbf x^*)\cap F(\mathbf x^*)=\emptyset$, con $D$ direzioni di discesa: la difficoltà è descrivere $F$. Se i gradienti "vedono" direzioni che in realtà escono dalla regione (cuspidi), le KKT possono fallire.

## Come si usa
Controesempio delle slide: $\min x_1$ s.t. $x_2-x_1^3\le0$, $-x_2\le0$. L'ottimo è l'origine, ma il sistema KKT $1-3\mu_1x_1^2=0$, $\mu_1=\mu_2$, … non ha soluzione. $\boldsymbol\delta=(-1,0)$ ridurrebbe $x_1$ e soddisfa $\boldsymbol\delta^T\nabla g_1(\mathbf 0)=\boldsymbol\delta^T\nabla g_2(\mathbf 0)=0$, quindi sta in $\bar{\mathcal F}$, ma porta fuori dalla regione: i gradienti $(0,1)$ e $(0,-1)$ non sono indipendenti e nessuna constraint qualification vale nell'origine. Analogo per i moltiplicatori di Lagrange: $x_1^3-x_2=0$, $x_2=0$.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap6.pdf` (p. 7-8, 34-37, 43).
- **Numerical opt** (magistrale): solo LICQ. I gradienti dei vincoli di uguaglianza e delle disuguaglianze attive sono linearmente indipendenti, e $x^*$ è detto "punto regolare". Controesempio: due circonferenze tangenti con $\nabla h_2(x^*)=2\nabla h_1(x^*)$, dove le condizioni di Lagrange non valgono nel minimo. Nel QP con soli vincoli di uguaglianza LICQ equivale ad avere le righe di $A$ indipendenti ([[Matrice KKT]]). Fonti: `magistrale/Numerical opt/Pieraccini/Part_5_Constrained_Optimization_General_Theory_and_Proj_Grad.pdf` (p. 13-14, 18); `magistrale/Numerical opt/Pieraccini/Part_6_Constrained_Optimization_QP.pdf` (p. 1); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (Th. 11.1, Obs. 11.1).

## Prerequisiti
- [[Dipendenza e indipendenza lineare]]: indipendenza dei gradienti attivi
- [[Moltiplicatori di Lagrange]]: regolarità nel caso di uguaglianze

## Porta a
- [[Condizioni di Karush-Kuhn-Tucker]]: ipotesi del teorema
- [[Teorema di dualità forte]]: la condizione di Slater

## Collegati
- [[Cono duale e cono polare]]: cono delle direzioni ammissibili
