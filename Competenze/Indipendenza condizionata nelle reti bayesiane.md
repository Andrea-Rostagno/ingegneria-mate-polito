---
tipo: competenza
area: statistica
corsi: [Modelli statistici, Statistica computazionale]
livello: [magistrale]
aliases: ["conditional independence in Bayesian networks", "catena forchetta collider", "chain fork collider", "explaining away", "spiegare via", "d-separazione", "d-separation", "collider"]
tags: [competenza, area/statistica]
---

# Indipendenza condizionata nelle reti bayesiane

> Le tre strutture elementari di un DAG a tre nodi (catena, forchetta, collider) dicono quando due variabili diventano indipendenti, o dipendenti, una volta noto il nodo intermedio.

## Definizione / enunciato
$X\perp Y\mid Z$ se per ogni $z$ con $f_Z(z)>0$
$$f_{X,Y\mid Z}(x,y\mid z)=f_{X\mid Z}(x\mid z)\,f_{Y\mid Z}(y\mid z),$$
equivalentemente $f_{X\mid Y,Z}=f_{X\mid Z}$: noto $Z$, $Y$ non aggiunge informazione su $X$ (libro, cap. 1, Def. 1.19).
- **Catena** $X_1\to X_2\to X_3$ e **forchetta** $X_1\leftarrow X_2\to X_3$: $X_1\perp X_3\mid X_2$, ma in generale non marginalmente (Prop. 1.20).
- **Collider** $X_1\to X_3\leftarrow X_2$: $X_1\perp X_2$, ma in generale $X_1\not\perp X_2\mid X_3$ (Prop. 1.21).

## Formule chiave
Forchetta: $f(x_1,x_2,x_3)=f(x_2)f(x_1\mid x_2)f(x_3\mid x_2)$, quindi $f(x_1,x_3\mid x_2)=f(x_1\mid x_2)f(x_3\mid x_2)$. Collider: sommando su $x_3$ la congiunta $f(x_1)f(x_2)f(x_3\mid x_1,x_2)$ resta $f(x_1)f(x_2)$, perché una condizionata somma a 1.

## Intuizione
In catena e forchetta l'informazione passa attraverso il nodo centrale: osservarlo "blocca" il percorso. Nel collider è il contrario: le cause sono indipendenti, ma se si osserva l'effetto e una causa lo spiega, l'altra diventa meno probabile (*explaining away*). Per grafi grandi il criterio generale è la d-separazione, citata come fuori programma.

## Come si usa
- Due test diagnostici condizionatamente indipendenti dato $D$ (forchetta): la verosimiglianza è il prodotto, e con prevalenza 0.01, sensibilità 0.90, specificità 0.95 si ha $P(D=1\mid T_1=T_2=1)\approx0.766$ contro 0.154 con un solo test (libro, Es. `c01-due-test`).
- Explaining away (Es. `c01-explaining-away`): due malattie indipendenti con prevalenza 0.1 e un sintomo comune; $P(X_3=1)=0.221$ e $P(X_1=1\mid X_3=1)\approx0.430$, valore che scende se si sa che anche la seconda malattia è presente.
- Attenzione: condizionare su un collider, o selezionare il campione in base all'effetto, crea dipendenze spurie.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 1, §1.4 (Def. 1.19, Prop. 1.20-1.21, p. 14). Fonti: `Libri/Modelli statistici/capitoli/cap01.tex`; `magistrale/Modelli statistici/PDF corretti/250925DAG.pdf`.
- **Statistica computazionale** (magistrale): definizione $f(A,B\mid Z)=f(A\mid Z)f(B\mid Z)$, che non implica indipendenza marginale. Esempio: $Z=A+W_1$, $B=A+W_2$ con $A,W_1,W_2\sim\mathrm{Bern}(0.5)$; la legge di $B$ dipende da $Z$ ($P(B=0\mid Z=0)=0.5$ ma $P(B=0\mid Z=1)=0.25$, $P(B=1\mid Z=1)=0.5$, $P(B=2\mid Z=1)=0.25$), mentre condizionando ad $A$ diventano indipendenti ($P(B=A\mid A,Z)=P(B=A+1\mid A,Z)=0.5$). **d-separazione** trattata in generale: un cammino tra $X$ e $Y$ è bloccato da $Z$ se c'è una catena ($X\to B\to Y$ o $X\leftarrow B\leftarrow Y$) o una forca ($X\leftarrow B\to Y$) con $B\in Z$, oppure un collider ($X\to B\leftarrow Y$) con $B\notin Z$ e nessun discendente di $B$ in $Z$; se tutti i cammini sono bloccati $X\perp Y\mid Z$ ($Z$ d-separa $X$ e $Y$), se ne esiste uno aperto sono dipendenti dato $Z$. Usata per semplificare le condizionate dell'HMM ("guardate il DAG"). Fonti: `magistrale/Statistica computazionale/modelli grafici.pdf` (p. 8-10, 15-16); `magistrale/Statistica computazionale/modelli mistura.pdf` (p. 49-50).

## Prerequisiti
- [[Rete bayesiana]]: le tre strutture sono DAG a tre nodi
- [[Indipendenza di variabili aleatorie]]: caso non condizionato

## Porta a
- [[Rete bayesiana gaussiana]]: zeri della matrice di precisione
- [[Distribuzione predittiva a posteriori]]: dati futuri indipendenti dai passati dato il parametro
- [[Modello gerarchico bayesiano]]: osservazioni condizionatamente i.i.d. dato il gruppo

## Collegati
- [[Indipendenza di eventi]]: versione per eventi, $P(A\cap B\mid C)=P(A\mid C)P(B\mid C)$
- [[Paradosso di Simpson]]: altra dipendenza creata o nascosta dal condizionamento
- [[Hidden Markov model]]: le indipendenze lette dal DAG semplificano il campionamento degli stati (Statistica computazionale)
- [[Autocorrelazione parziale]]: si annulla perché passato e futuro sono indipendenti dato l'intermezzo (Statistica computazionale)
