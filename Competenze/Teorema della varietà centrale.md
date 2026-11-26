---
tipo: competenza
area: analisi
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["center manifold theorem", "centre manifold theorem", "varietà centrale", "center manifold", "riduzione alla varietà centrale"]
tags: [competenza, area/analisi]
---

# Teorema della varietà centrale

> Vicino a un punto fisso con autovalori a parte reale nulla, la dinamica interessante vive su una varietà invariante tangente all'autospazio centrale, che si approssima con una serie di Taylor.

## Definizione / enunciato
**Teorema.** Sia $f$ di classe $C^r$ su $\mathbb R^n$ con $f(0)=0$ e $A=Df(0)$; si dividono gli autovalori in $\sigma_s$ ($\mathrm{Re}\lambda<0$), $\sigma_c$ ($\mathrm{Re}\lambda=0$), $\sigma_u$ ($\mathrm{Re}\lambda>0$), con autospazi $E^s,E^c,E^u$. Esistono varietà invarianti $C^r$ stabile $W^s$ e instabile $W^u$ tangenti a $E^s$, $E^u$ in 0, e una varietà **centrale** $W^c$ di classe $C^{r-1}$ tangente a $E^c$. $W^s$ e $W^u$ sono uniche, $W^c$ non necessariamente. Problema: si sa come evolve la dinamica su $W^s$ e $W^u$, non su $W^c$.

## Formule chiave
Con $W^u$ vuota e parte lineare a blocchi, $\dot x=Bx+f(x,y)$, $\dot y=Cy+g(x,y)$ ($B$ con autovalori a parte reale nulla, $C$ negativa; $f,g$ e derivate prime nulle in 0), si scrive $W^c=\{(x,y):y=h(x)\}$ con $h(0)=Dh(0)=0$ e la dinamica ridotta è $\dot x=Bx+f(x,h(x))$. Derivando $y=h(x)$ si ottiene l'equazione (PDE) per $h$:
$$\mathcal N(h(x))\equiv Dh(x)\big[Bx+f(x,h(x))\big]-Ch(x)-g(x,h(x))=0 .$$
**Teorema di approssimazione:** se $\phi$ con $\phi(0)=D\phi(0)=0$ verifica $\mathcal N(\phi(x))=O(|x|^p)$ per qualche $p>1$, allora $h(x)=\phi(x)+O(|x|^p)$.

## Intuizione
Lungo le direzioni stabili la dinamica si contrae rapidamente: resta solo il moto "lento" sulla varietà centrale, che decide la stabilità. Localmente il flusso è topologicamente equivalente a $\dot{\tilde x}=\tilde f(\tilde x)$ su $W^c$, $\dot{\tilde y}=-\tilde y$, $\dot{\tilde z}=\tilde z$.

## Come si usa
Si cercano soluzioni di $\mathcal N=0$ in serie di potenze per approssimare $h$, ammesso che $W^c$ sia analitica in 0 (non sempre è così). Esempio: sistema di Lorenz in $\rho=1$; nella base di autovettori $(u,v,w)$ la varietà centrale è tangente all'asse $u$, ma l'asse $u$ non è invariante perché $\dot w$ contiene $u^2$.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/IntroToDynamicalSystems (1).pdf` (p. 23-24).

## Prerequisiti
- [[Varietà stabile e instabile]]: le altre due varietà invarianti
- [[Autovalori e autovettori]]: decomposizione dello spettro di $Df(0)$

## Porta a
- Nessuno nel corso.

## Collegati
- [[Biforcazione]]: nelle biforcazioni compare un autovalore a parte reale nulla
- [[Sistema di Lorenz]]: esempio in $\rho=1$
- [[Formula di Taylor in più variabili]]: approssimazione in serie di $h$
