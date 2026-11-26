---
tipo: competenza
area: probabilita
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["Kurtz's theorem", "teorema di Kurtz", "limite idrodinamico", "hydrodynamic limit", "limite di campo medio", "mean field limit", "equazione di campo medio", "mean field equation", "operatore di deriva", "drift operator"]
tags: [competenza, area/probabilita]
---

# Teorema di Kurtz

> Per popolazioni grandi, il processo delle frequenze empiriche di un sistema anonimo resta vicino, uniformemente su intervalli di tempo finiti, alla soluzione dell'ODE $\dot z=F(z)$ data dalla deriva attesa.

## Definizione / enunciato
Successione di processi di tipo $Z^{(n)}(t)\in\mathcal P_n(\mathcal A)$ con nuclei $\Psi^{(n)}_{ab}(\theta)$. Ipotesi:
- (A1) $\Psi^{(n)}_{ab}(\theta)\to\Psi_{ab}(\theta)$ lipschitziane, uniformemente in $\theta$;
- (A2) $Z^{(n)}(0)\to z_0$.
**Operatore di deriva:**
$$F(\theta)=\sum_{a,b\in\mathcal A}\big(\delta^{(b)}-\delta^{(a)}\big)\theta_a\Psi_{ab}(\theta).$$
**Teorema (Kurtz).** Se $z(t)$ risolve $\dot z=F(z)$, $z(0)=z_0$, allora per ogni $T>0$, con probabilità 1,
$$\lim_{n\to+\infty}\sup_{0\le t\le T}|Z^{(n)}(t)-z(t)|=0 .$$

## Formule chiave
Interpretazione: $\mathbb E[Z^{(n)}(t+h)-Z^{(n)}(t)\mid Z^{(n)}(t)=z]=hF(z)+o(h)$.
Proprietà: $\mathbb 1'F(\theta)=0$ (massa conservata); $z_a=0\Rightarrow F(z)_a\ge0$; quindi $z_0\in\mathcal P(\mathcal A)\Rightarrow z(t)\in\mathcal P(\mathcal A)$ per ogni $t$.
Caso binario: $\dot z_1=\lambda(z_1)-\mu(z_1)$ con $\lambda(z_1)=(1-z_1)\Psi_{01}(z_1)$, $\mu(z_1)=z_1\Psi_{10}(z_1)$ lipschitziane.
**Asintotica:** Kurtz non dice nulla su $t\to\infty$ (i limiti $\lim_t\lim_n$ e $\lim_n\lim_t$ possono differire). Teorema nel caso binario: se $Z^{(n)}$ è ergodica con invariante $\mu^{(n)}$ e l'ODE ha un unico equilibrio $z^*$ globalmente asintoticamente stabile, allora $\mu^{(n)}\to\delta_{z^*}$ debolmente.

## Intuizione
Ogni salto sposta le frequenze di $1/n$ ma i salti avvengono a tasso $\sim n$: la media dei salti dà una velocità finita $F(z)$, mentre le fluttuazioni si mediano come nella legge dei grandi numeri.

## Come si usa
Si calcola $F$ dai tassi e si studia l'ODE (equilibri, stabilità, biforcazioni). Idee di prova citate: martingale e disuguaglianza di Azuma sui tempi $0,1/n,2/n,\dots$, oppure scrivere $Z^{(n)}$ come equazione integrale stocastica e confrontarla con l'ODE con il lemma di Gronwall. Esempi: SIS ($\dot z_1=\alpha z_1(1-z_1)-z_1$), SIR, votante ($\dot z_1=0$), logit ($\dot z=g(z)-z$).

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 11, "An instance of the hydrodynamic limit", "The hydrodynamic limit in the general case", "High level ideas on the proof of Kurtz's theorem", "The hydrodynamic limit: asymptotics". Fonti: `magistrale/Dinamiche su network/slide/Slides-11-Meanfield.pdf` (pp. 36-38, 49-51, 63-68).

## Prerequisiti
- [[Sistemi multi-agente anonimi]]: processo delle frequenze empiriche

## Porta a
- [[Modello SIS di campo medio]]: ODE logistica dell'epidemia
- [[Dinamica logit di campo medio]]: ODE $\dot z=g(z)-z$

## Collegati
- [[Problema di Cauchy]]: l'ODE limite con dato iniziale $z_0$
- [[Legge dei grandi numeri]]: Kurtz è una legge dei grandi numeri per processi
- [[Modello SIR]]: il SIR di Kermack-McKendrick come limite idrodinamico
