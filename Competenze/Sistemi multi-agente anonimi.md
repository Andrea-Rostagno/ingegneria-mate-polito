---
tipo: competenza
area: probabilita
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["anonymous multi-agent systems", "sistemi anonimi", "frequenze empiriche", "empirical frequencies", "type of a configuration", "tipo di una configurazione", "processo delle frequenze empiriche", "empirical frequency process", "nucleo di interazione anonimo", "anonymous interaction kernel"]
tags: [competenza, area/probabilita]
---

# Sistemi multi-agente anonimi

> Sistemi in cui il tasso con cui un agente cambia stato dipende solo dal proprio stato e dalle frazioni di popolazione nei vari stati: allora le frequenze empiriche formano da sole una catena di Markov, enormemente più piccola di quella delle configurazioni.

## Definizione / enunciato
$\mathcal A$ finito, $\mathcal P(\mathcal A)$ vettori di probabilità, $\mathcal P_n(\mathcal A)=\{\theta\in\mathcal P(\mathcal A):n\theta\in\mathbb Z^{\mathcal A}_+\}$. Per $x\in\mathcal A^{\mathcal V}$, $|\mathcal V|=n$, il **tipo** è
$$\theta_a(x)=\frac1n|\{i:x_i=a\}|.$$
**Sistema anonimo:** in configurazione $x$ un agente passa da $x_i$ a $y_i$ con tasso $\Psi_{x_iy_i}(\theta(x))$ (nucleo d'interazione anonimo). CTMC su $\mathcal A^{\mathcal V}$ con $\Lambda_{xy}=\Psi_{x_iy_i}(\theta(x))$ se $x,y$ differiscono solo in $i$.

**Teorema.** $Z(t)=\theta(X(t))\in\mathcal P_n(\mathcal A)$ è un processo di Markov di salto con tassi
$$\tilde\Lambda_{\theta\theta'}=n\theta_a\Psi_{ab}(\theta)\quad\text{se }\theta'=\theta+n^{-1}(\delta^{(b)}-\delta^{(a)}),\qquad 0\text{ altrimenti}.$$

## Formule chiave
Lemma generale (aggregazione): se $\sum_{y:\theta(y)=\theta'}\Lambda_{x_1y}=\sum_{y:\theta(y)=\theta'}\Lambda_{x_2y}$ ogni volta che $\theta(x_1)=\theta(x_2)$, allora $\theta(X(t))$ è una CTMC con $\tilde\Lambda_{\theta\theta'}=\sum_{y:\theta(y)=\theta'}\Lambda_{xy}$.
Riduzione di complessità: $|\mathcal X|=|\mathcal A|^n$ contro $|\mathcal P_n(\mathcal A)|=\binom{n+|\mathcal A|-1}{|\mathcal A|-1}\le(n+|\mathcal A|-1)^{|\mathcal A|-1}$.
**Caso binario:** $Z_1$ è una nascita-morte su $\{0,1/n,\dots,1\}$ con $\lambda_{z_1}=n(1-z_1)\Psi_{01}(z_1)$, $\mu_{z_1}=nz_1\Psi_{10}(z_1)$, e
$$\mathbb E[Z_1(t+h)-Z_1(t)\mid Z_1(t)=z_1]=h\big[(1-z_1)\Psi_{01}(z_1)-z_1\Psi_{10}(z_1)\big]+o(h).$$

## Intuizione
Se nessuno guarda "chi" fa cosa ma solo "quanti" fanno cosa, basta contare. La deriva attesa del conteggio suggerisce un'ODE, giustificata dal teorema di Kurtz.

## Come si usa
Esempio principale: sistemi a coppie sul grafo completo $K_n$ con link a tasso $\beta=\alpha/n$; allora
$$\Psi_{x_iy_i}(\theta)=\psi_{x_iy_i}+\alpha\sum_{c\neq x_i}\theta_c\varphi_{x_iy_i}(c)+\alpha\big(\theta_{x_i}-\tfrac1n\big)\varphi_{x_iy_i}(x_i),$$
e nel binario $\Psi_{01}=\psi_{01}+\alpha\theta_1\varphi_{01}(1)$, $\Psi_{10}=\psi_{10}+\alpha\theta_0\varphi_{10}(0)$. Altro esempio: la dinamica logit nei giochi anonimi.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 11, "General mean field models", "Anonymous multi-agent systems", "Binary anonymous multi-agent systems", "Pairwise interacting systems over complete graphs". Fonti: `magistrale/Dinamiche su network/slide/Slides-11-Meanfield.pdf` (pp. 19-36, 43-46).

## Prerequisiti
- [[Sistemi di interazione a coppie]]: il caso sul grafo completo è anonimo
- [[Catena di Markov a tempo continuo]]: CTMC e aggregazione degli stati

## Porta a
- [[Teorema di Kurtz]]: limite ODE delle frequenze empiriche

## Collegati
- [[Catena di nascita e morte continua]]: caso binario
- [[Distribuzione multinomiale]]: conteggi di stati come vettore di frequenze
