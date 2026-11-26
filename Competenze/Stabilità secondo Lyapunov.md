---
tipo: competenza
area: fisica
corsi: [Meccanica, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["Lyapunov stability", "stabilità secondo Ljapunov", "stabilità dinamica dell'equilibrio", "equilibrio stabile secondo Lyapunov", "dynamic stability", "punto di equilibrio di un sistema di ODE", "configurazione di equilibrio", "equilibrio attrattivo di un sistema di ODE", "equilibrio asintoticamente stabile di un sistema di ODE", "globalmente asintoticamente stabile"]
tags: [competenza, area/fisica]
---

# Stabilità secondo Lyapunov

> Un equilibrio è stabile secondo Lyapunov se i moti che partono abbastanza vicini, con velocità abbastanza piccole, restano per sempre vicini all'equilibrio e con velocità piccole.

## Definizione / enunciato
**Def. 8.2:** la configurazione $P_0=(P_{01},\dots,P_{0n})$ è stabile secondo Lyapunov se $\forall\varepsilon,\varepsilon'>0\ \exists\delta,\delta'>0$ tali che
$$\begin{cases}|P_{0i}-P_i(t_0)|<\delta\\|\vec v_i(t_0)|<\delta'\end{cases}\ \forall i\quad\Longrightarrow\quad\begin{cases}|P_{0i}-P_i(t)|<\varepsilon\\|\vec v_i(t)|<\varepsilon'\end{cases}\ \forall i,\ \forall t\ge t_0\qquad(8.26).$$
Il manoscritto dà la versione sulle sole posizioni: $\forall\varepsilon>0\ \exists\delta>0$ tale che $|P_i(0)-P_i^*|<\delta\Rightarrow|P_i(t)-P_i^*|<\varepsilon$ per ogni $t>0$.

## Formule chiave
Nel caso unidimensionale linearizzato (Lect7 pp. 86-88), il segno di $U''(q^0)$ decide:
- $U''<0$: oscillazioni limitate (stabile);
- $U''=0$: $\eta(t)=\eta(0)+\dot\eta(0)t$, il moto si allontana linearmente;
- $U''>0$: $\eta(t)=\eta(0)\cosh\omega t+\frac1\omega\dot\eta(0)\sinh\omega t$, fortemente instabile.

## Intuizione
È una nozione dinamica: riguarda le soluzioni del problema di Cauchy, non il lavoro delle forze come la stabilità statica. Uno stato di quiete "lontano" non basta: servono sia posizioni sia velocità piccole in ogni istante successivo.

## Come si usa
Raramente si verifica dalla definizione: per sistemi olonomi conservativi con vincoli fissi si usa il teorema di Lagrange-Dirichlet (massimo isolato di $U$). Per l'instabilità si guarda la linearizzazione: un autovalore "iperbolico" ($\lambda^2>0$) basta a far crescere esponenzialmente le piccole perturbazioni.

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (pp. 86-88, Def. 8.2; numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (definizione di configurazione stabile, p. 135).
- **Equazioni di fisica matematica** (triennale): per un sistema $\dot x=f(x)$, $\bar x\in\mathbb R^n$ è **punto di equilibrio** se $f(\bar x)=0$, e allora $x(t)\equiv\bar x$ è soluzione. Esempi: Malthus $\bar x=0$; Verhulst $\bar x=0$, $\bar x=K$; lineare $\dot x=Ax$, equilibri $=\ker A$ (solo $0$ se $A$ non è singolare). Definizioni:
  - **stabile**: $\forall\varepsilon>0\ \exists\delta>0$ con $\|x_0-\bar x\|<\delta\Rightarrow\|x(t)-\bar x\|<\varepsilon$ per ogni $t>0$;
  - **(localmente) attrattivo**: $\exists\delta>0$ con $\|x_0-\bar x\|<\delta\Rightarrow\lim_{t\to+\infty}x(t)=\bar x$; **globalmente attrattivo** se $\delta$ è arbitrario;
  - **asintoticamente stabile** se stabile e attrattivo; **globalmente asintoticamente stabile** se stabile e globalmente attrattivo.
  Non c'è relazione a priori tra stabilità e attrattività. Qui la nozione riguarda le sole posizioni nello spazio delle fasi $\mathbb R^n$, senza la parte sulle velocità di Meccanica. Fonti: `triennale/ANNO 3/eq fisica matematica/07 - Lezione 17_10_23.pdf` (pp. 2-5).

## Prerequisiti
- [[Teorema di esistenza e unicità locale]]: si ragiona sulle soluzioni del problema di Cauchy

## Porta a
- [[Teorema di Lagrange-Dirichlet]]: condizione sufficiente di stabilità
- [[Stabilità dei sistemi lineari di ODE]]: criterio sugli autovalori per ẋ = Ax (Equazioni di fisica matematica)
- [[Teoremi di Lyapunov]]: condizioni sufficienti tramite funzioni di Lyapunov (Equazioni di fisica matematica)

## Collegati
- [[Stabilità dell'equilibrio in senso statico]]: nozione statica, contro quella dinamica
- [[Condizionamento dei problemi di Cauchy]]: stabilità delle soluzioni di un problema a valori iniziali
- [[Criterio di Foster-Lyapunov per la ricorrenza]]: funzione di Lyapunov per le catene di Markov
- [[Modello di Verhulst]]: equilibri 0 e K come esempi (Equazioni di fisica matematica)
