---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["trace theorem", "operatore traccia", "traccia di una funzione di Sobolev", "funzioni a traccia nulla", "trace-zero functions", "Tu = u|∂U"]
tags: [competenza, area/analisi]
---

# Teorema di traccia

> Le funzioni di $W^{1,p}(U)$ non hanno valori puntuali sul bordo, ma hanno una **traccia** in $L^p(\partial U)$ che estende la restrizione delle funzioni continue; $W^{1,p}_0$ è esattamente il nucleo della traccia.

## Definizione / enunciato
Sia $1\le p<\infty$.
**Teorema 1 (traccia).** Sia $U$ limitato con $\partial U$ di classe $C^1$. Esiste un operatore lineare limitato $T:W^{1,p}(U)\to L^p(\partial U)$ tale che
(i) $Tu=u|_{\partial U}$ se $u\in W^{1,p}(U)\cap C(\overline U)$;
(ii) $\|Tu\|_{L^p(\partial U)}\le C\|u\|_{W^{1,p}(U)}$, con $C$ dipendente solo da $p$ e $U$.
$Tu$ si chiama traccia di $u$ su $\partial U$.

**Teorema 2 (funzioni a traccia nulla).** Se inoltre $u\in W^{1,p}(U)$, allora
$$u\in W^{1,p}_0(U)\iff Tu=0\ \text{su }\partial U.$$

## Formule chiave
Per $u\in C^1(\overline U)$ con bordo piatto vicino a $x^0$ e cutoff $\zeta$ ($\zeta\equiv1$ su $\hat B$), con la disuguaglianza di Young elementare:
$$\int_\Gamma|u|^pdx'\le\int_{\{x_n=0\}}\zeta|u|^pdx'=-\int_{B^+}(\zeta|u|^p)_{x_n}dx\le C\int_{B^+}|u|^p+|Du|^p\,dx .$$
Raddrizzando il bordo e ricoprendo $\partial U$ con finiti pezzi si ha $\|Tu\|_{L^p(\partial U)}\le C\|u\|_{W^{1,p}(U)}$ per $u\in C^1(\overline U)$; per $u\in W^{1,p}$ si definisce $Tu:=\lim_mTu_m$ in $L^p(\partial U)$ con $u_m\in C^\infty(\overline U)$, $u_m\to u$ (il limite non dipende dall'approssimante).

## Intuizione
$\partial U$ ha misura di Lebesgue nulla, quindi "$u$ ristretta a $\partial U$" non ha senso per una classe di funzioni q.o. Ha senso invece il limite delle restrizioni di approssimanti lisce, perché la restrizione è continua rispetto alla norma $W^{1,p}$: è un'estensione per continuità da un sottospazio denso.

## Come si usa
Dà senso alle condizioni al bordo nella formulazione debole: "$u=g$ su $\partial U$" significa $Tu=g$, e la condizione omogenea si codifica con $u\in H^1_0(U)$. Un dato $g$ non nullo deve essere traccia di qualche $w\in H^1(U)$; allora $\tilde u=u-w\in H^1_0$ risolve un problema con dato nullo.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): Evans §5.5 "Traces" (Teor. 1 con dimostrazione, Teor. 2, la parte inversa segnata come "omettere a prima lettura"). Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 257-261).

## Prerequisiti
- [[Spazi di Sobolev]]: dominio dell'operatore traccia
- [[Approssimazione con funzioni lisce negli spazi di Sobolev]]: approssimanti in $C^\infty(\overline U)$

## Porta a
- [[Formulazione debole di un problema ellittico]]: condizioni al bordo nel senso delle tracce

## Collegati
- [[Estensione per continuità]]: la traccia estende la restrizione dalle funzioni lisce dense
