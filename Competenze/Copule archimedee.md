---
tipo: competenza
area: probabilita
corsi: [Prova finale]
livello: [triennale]
aliases: ["Archimedean copulas", "copula archimedea", "copule Archimedee", "generatore archimedeo", "Archimedean generator", "pseudo-inversa del generatore", "tau di Kendall per copule archimedee"]
tags: [competenza, area/probabilita]
---

# Copule archimedee

> Copule costruite da una sola funzione di una variabile, il generatore: $C(u,v)=\varphi^{[-1]}(\varphi(u)+\varphi(v))$. Comprendono Clayton, Gumbel e Frank.

## Definizione / enunciato
**Convenzione di Nelsen** (Def. 4.1.1, Thm 4.1.4). Sia $\varphi:[0,1]\to[0,\infty]$ continua, strettamente decrescente, $\varphi(1)=0$, con pseudo-inversa $\varphi^{[-1]}(t)=\varphi^{-1}(t)$ per $0\le t\le\varphi(0)$ e $0$ per $t\ge\varphi(0)$. Allora
$$C(u,v)=\varphi^{[-1]}\big(\varphi(u)+\varphi(v)\big)$$
è una copula **se e solo se $\varphi$ è convessa**.

**Convenzione di Pellerey** (slide 74-75): si usa il generatore $\psi=\varphi^{-1}:[0,\infty]\to[0,1]$, decrescente, continuo, $\psi(0)=1$, $\psi(\infty)=0$, e $C_\psi(\mathbf u)=\psi(\psi^{-1}(u_1)+\dots+\psi^{-1}(u_d))$. Se $\psi$ è $d$-monotona, $(-1)^k\psi^{(k)}\ge0$ per $k=0,\dots,d$, allora $C_\psi$ è una $d$-copula; per $d=2$ basta $\psi$ decrescente e convessa.

## Formule chiave
- Tau di Kendall (Nelsen, Cor. 5.1.4, generatore $\varphi$ alla Nelsen):
$$\tau_C=1+4\int_0^1\frac{\varphi(t)}{\varphi'(t)}\,dt .$$
La slide 83 di Pellerey scrive la stessa formula con il simbolo $\psi$: va letta nella convenzione di Nelsen.
- Generatori $\psi$ (Pellerey): Clayton $\psi(t)=(\max\{1+\theta t,0\})^{-1/\theta}$; Gumbel-Hougaard $\psi(t)=\exp(-t^{1/\theta})$ (la slide scrive $u^{1/\theta}$); Frank $\psi(t)=-\frac1\theta\ln\big(1-(1-e^{-\theta})e^{-t}\big)$.
- Dipendenza di coda (Nelsen, Cor. 5.4.3): $\lambda_L=\lim_{x\to\infty}\varphi^{[-1]}(2x)/\varphi^{[-1]}(x)$, $\lambda_U=2-\lim_{x\to0^+}\frac{1-\varphi^{[-1]}(2x)}{1-\varphi^{[-1]}(x)}$.

## Intuizione
Tutta la dipendenza è racchiusa in una funzione di una variabile: questo le rende flessibili e comode da stimare (un parametro) e permette dipendenze asimmetriche, a differenza delle copule ellittiche. La tesi: "popolari per la loro flessibilità e la relativa facilità di utilizzo"; per esse il tau di Kendall "può essere calcolato direttamente dal generatore".

## Come si usa
Esempio delle slide: per Clayton la formula del tau dà $\tau_{C_\theta}=\theta/(\theta+2)$. Altro esempio (Pellerey, slide 84-87): i modelli di fragilità (frailty) con $\psi(x)=\mathbb E[e^{-x\Theta}]$ producono copule di sopravvivenza archimedee; se $\Theta$ è Gamma, la copula è Clayton.

## Nei corsi
- **Prova finale** (triennale): famiglia "Archimedee" del cap. 2 e §3.4.1; relazione col tau in §5.2.4. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§2.2.1, p. 14; §3.4.1, p. 24; §5.2.4, p. 50); `triennale/ANNO 3/Prove finali/An Introduction to Copulas - Nelsen.pdf` (Def. 4.1.1, Thm 4.1.4, Cor. 5.1.4, Cor. 5.4.3); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 73-87).

## Prerequisiti
- [[Copula]]: definizione generale
- [[Funzione convessa]]: condizione necessaria e sufficiente sul generatore

## Porta a
- [[Copula di Clayton]]: membro con coda inferiore
- [[Copula di Gumbel]]: membro con coda superiore
- [[Copula di Frank]]: membro simmetrico
- [[Tau di Kendall]]: formula integrale nel generatore

## Collegati
- [[Copula gaussiana]]: contrasto, copula ellittica e non archimedea
- [[Distribuzione Gamma]]: fragilità Gamma che genera la Clayton
