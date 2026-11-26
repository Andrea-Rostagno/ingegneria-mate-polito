---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["extension theorem", "operatore di estensione", "riflessione di ordine superiore", "higher-order reflection"]
tags: [competenza, area/analisi]
---

# Teorema di estensione per spazi di Sobolev

> Se $\partial U$ è $C^1$, ogni $u\in W^{1,p}(U)$ si estende a una funzione di $W^{1,p}(\mathbb R^n)$ a supporto compatto, con un operatore lineare limitato.

## Definizione / enunciato
**Teorema 1 (§5.4).** Sia $1\le p\le\infty$, $U$ limitato con $\partial U$ di classe $C^1$, e $V$ aperto limitato con $U\subset\subset V$. Esiste un operatore lineare limitato
$$E:W^{1,p}(U)\to W^{1,p}(\mathbb R^n)$$
tale che per ogni $u\in W^{1,p}(U)$: (i) $Eu=u$ q.o. in $U$; (ii) $Eu$ ha supporto in $V$; (iii) $\|Eu\|_{W^{1,p}(\mathbb R^n)}\le C\|u\|_{W^{1,p}(U)}$, con $C$ dipendente solo da $p$, $U$, $V$. $Eu$ si chiama un'estensione di $u$ a $\mathbb R^n$.

## Formule chiave
Caso di bordo piatto vicino a $x^0$ ($B^+=B\cap\{x_n\ge0\}\subset\overline U$, $B^-=B\cap\{x_n\le0\}\subset\mathbb R^n\setminus U$), per $u\in C^\infty(\overline U)$: **riflessione di ordine superiore**
$$\bar u(x):=\begin{cases}u(x) & x\in B^+\\ -3u(x_1,\dots,x_{n-1},-x_n)+4u\big(x_1,\dots,x_{n-1},-\tfrac{x_n}2\big) & x\in B^-.\end{cases}$$
Si verifica $u^-_{x_n}=u^+_{x_n}$ e $u^-=u^+$ su $\{x_n=0\}$, quindi $\bar u\in C^1(B)$ e $\|\bar u\|_{W^{1,p}(B)}\le C\|u\|_{W^{1,p}(B^+)}$. Poi si raddrizza il bordo con una mappa $C^1$, si usa una partizione dell'unità e si passa a $u\in W^{1,p}$ per densità.

## Intuizione
Estendere a zero fuori da $U$ crea una discontinuità al bordo e distrugge la derivata debole: bisogna estendere "preservando le derivate attraverso $\partial U$". La combinazione $-3,+4$ è scelta proprio per raccordare valore e derivata normale.

## Come si usa
Permette di dimostrare le disuguaglianze su $\mathbb R^n$ (per funzioni a supporto compatto) e trasferirle a $U$: GNS per $W^{1,p}(U)$, Morrey, Rellich-Kondrachov. Oss.: se $\partial U$ è $C^2$, $E$ è limitato anche da $W^{2,p}(U)$ a $W^{2,p}(\mathbb R^n)$; per $k>2$ serve una riflessione più complicata.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): Evans §5.4 "Extensions" (Teor. 1 con dimostrazione, Osservazioni). Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 254-257).

## Prerequisiti
- [[Spazi di Sobolev]]: spazio da estendere
- [[Approssimazione con funzioni lisce negli spazi di Sobolev]]: si estende prima su $C^\infty(\overline U)$

## Porta a
- [[Disuguaglianza di Gagliardo-Nirenberg-Sobolev]]: stima su $U$ via estensione
- [[Disuguaglianza di Morrey]]: hölderianità su $\overline U$
- [[Teorema di Rellich-Kondrachov]]: riduzione al caso $U=\mathbb R^n$
