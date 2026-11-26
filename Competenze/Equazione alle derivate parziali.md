---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["EDP", "PDE", "partial differential equation", "equazione differenziale alle derivate parziali", "EDP lineare", "EDP semilineare", "EDP quasilineare", "EDP completamente non lineare", "classificazione delle EDP", "equazione ellittica, parabolica, iperbolica", "multi-indice", "ordine di una PDE", "PDE quasi-lineare", "PDE semi-lineare", "equazione dei mezzi porosi"]
tags: [competenza, area/analisi]
---

# Equazione alle derivate parziali

> Relazione funzionale tra una funzione incognita di più variabili, il punto e le sue derivate parziali fino a un ordine $k$; si classifica in base a quanto è lineare nelle derivate di ordine massimo.

## Definizione / enunciato
**Def. 2.1.1.** Un'EDP di ordine $k\in\mathbb N$ è una scrittura
$$F\big(x,u(x),Du(x),D^2u(x),\dots,D^ku(x)\big)=0\qquad\text{per ogni }x\in\Omega,$$
con $\Omega\subset\mathbb R^n$ aperto e $F$ funzione data; in forma compatta $F(x,D^\alpha u(x))=0$ per $\alpha\in\mathbb N^n$, $|\alpha|\le k$ (notazione dei multi-indici).

**Def. 2.1.2 (classificazione).** L'EDP si dice
- **lineare** se $\sum_{|\alpha|\le k}a_\alpha(x)D^\alpha u(x)=f(x)$; **omogenea** se $f\equiv0$ (le soluzioni formano uno spazio vettoriale e $u_{\rm sol}=u_{\rm om}+u_{\rm part}$);
- **semilineare** se $\sum_{|\alpha|=k}a_\alpha(x)D^\alpha u+a_0(x,u,Du,\dots,D^{k-1}u)=0$: lineare nelle derivate di ordine massimo, con coefficienti che dipendono solo dal punto;
- **quasilineare** se i coefficienti delle derivate di ordine massimo dipendono da $x,u,\dots,D^{k-1}u$;
- **completamente non lineare** se dipende in modo non lineare dalle derivate di ordine massimo.
Le stesse definizioni valgono per i sistemi ($u:\Omega\to\mathbb R^m$).

## Formule chiave
Secondo ordine (§2.4, solo traccia negli appunti): coefficienti $a_{ij}(x)$ in una matrice simmetrica $A(x)$, $b_i(x)$ sul gradiente, $a_0(x)$ su $u$, forzante $f$. La classificazione in **ellittiche, paraboliche, iperboliche** dipende dal segno degli autovalori di $A(x)=(a_{ij}(x))$. Prototipi negli appunti: laplaciano $-\Delta$ (ellittico), operatore del calore $\partial_t-\Delta$ (parabolico), dalambertiano o operatore delle onde $\square=\partial^2_{tt}-\Delta$ (Es. 5.4.1; il tipo iperbolico non è trattato negli appunti).

## Intuizione
Una teoria unica che risolva tutte le EDP è "vana speranza": la classificazione serve a isolare famiglie (lineari, ellittiche, ...) che hanno un metodo comune. Rispetto alle ODE, le "costanti di integrazione" diventano funzioni (Es. 2.3.1: $u_{ttt}=0$ dà $u=a(x,y)\frac{t^2}2+b(x,y)t+c(x,y)$).

## Come si usa
Prima di scegliere un metodo si riconosce il tipo: per un'equazione lineare a coefficienti costanti si cerca la soluzione fondamentale; per un'ellittica in forma di divergenza si passa alla formulazione debole in $H^1_0$. Esempio degli appunti: l'equazione di Poisson $-u''=f$ è lineare, del secondo ordine, con matrice dei coefficienti costante.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §2.1 (Def. 2.1.1-2.1.3), §2.4 (classificazione, solo schema), Es. 2.3.1. In Evans §6.1.1 gli operatori del secondo ordine in forma di divergenza e non. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 9-10, 13, 15, 55); `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (p. 294).
- **Equazioni di fisica matematica** (triennale): dominio $Q=\Omega\times(0,+\infty)\subseteq\mathbb R^{n+1}$, con $\Omega\subseteq\mathbb R^n$ dominio spaziale; una PDE è $F(\{D^\alpha u\}_\alpha,u,x,t)=0$ con multi-indice $\alpha=(\alpha_1,\dots,\alpha_{n+1})$ che include il tempo e $|\alpha|=\sum\alpha_i$. L'**ordine** è la massima lunghezza $|\alpha|$ presente. Le derivate rispetto a $t$ sono sempre scritte esplicitamente, e $\Delta$, $\nabla$ agiscono solo su $x$. Classificazione: **lineare**; **quasi-lineare** ($\sum_{|\alpha|=N}c_\alpha D^\alpha u+G(\{D^\alpha u\}_{|\alpha|<N},u,x,t)$, con $c_\alpha$ che possono dipendere da $x,t,u$ e dalle derivate di ordine minore); **semi-lineare** (quasi-lineare con $c_\alpha$ indipendenti da $u$ e dalle sue derivate). Esempi: Laplace $\Delta u=0$, Poisson $\Delta u=-\frac1\varepsilon\rho$, calore $\partial_tu-D\Delta u=f$ (II ordine in spazio, I in tempo), onde $\partial_t^2u-D\Delta u=f$, trasporto $\partial_tu+a\cdot\nabla u=0$ (I ordine); mezzi porosi $\partial_tu-D\Delta(u^\gamma)=0$, non lineare per $\gamma\ne1$. Fonti: `triennale/ANNO 3/eq fisica matematica/11 - Lezione 31_10_23.pdf` (pp. 1-6); `triennale/ANNO 3/eq fisica matematica/12 - Lezione 03_11_23.pdf` (pp. 1-2).

## Prerequisiti
- [[Derivate parziali]]: le incognite compaiono tramite le loro derivate parziali

## Porta a
- [[Buona positura secondo Hadamard]]: quando un problema per un'EDP è "buono"
- [[Operatore uniformemente ellittico]]: la classe ellittica del secondo ordine
- [[Soluzione fondamentale di un operatore differenziale]]: metodo per le lineari a coefficienti costanti
- [[Equazione del trasporto]]: prototipo del primo ordine (Equazioni di fisica matematica)
- [[Legge di conservazione]]: PDE del primo ordine in genere non lineari (Equazioni di fisica matematica)

## Collegati
- [[Equazione delle onde]]: prototipo iperbolico (dalambertiano)
- [[Equazione del calore]]: prototipo parabolico
- [[Funzione armonica]]: soluzioni del prototipo ellittico
- [[Equazione di Poisson]]: esempio di PDE con termine noto (Equazioni di fisica matematica)
