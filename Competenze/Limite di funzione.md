---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["limit of a function", "definizione topologica di limite", "limite destro", "limite sinistro", "limiti laterali", "definizione epsilon-delta"]
tags: [competenza, area/analisi]
---

# Limite di funzione

> La definizione unificata di limite: comunque si scelga un intorno del valore limite, esiste un intorno del punto in cui la funzione (fuori dal punto) cade in quell'intorno.

## Definizione / enunciato
Sia $f:A\to\mathbb R$ e $\bar x\in\overline{\mathbb R}$ di accumulazione per $A$. Si dice che $\lim_{x\to\bar x}f(x)=\ell\in\overline{\mathbb R}$ se (Mazzi, def. 1.1)
$$\forall B(\ell)\ \exists B(\bar x):\quad x\in B(\bar x)\cap A\setminus\{\bar x\}\ \Rightarrow\ f(x)\in B(\ell).$$
Casi particolari: $\ell,\bar x\in\mathbb R$: $\forall\varepsilon>0\ \exists\delta>0:\ 0<|x-\bar x|<\delta,\ x\in A\Rightarrow|f(x)-\ell|<\varepsilon$; $\bar x=+\infty$: $\forall\varepsilon\ \exists a:\ x>a\Rightarrow|f(x)-\ell|<\varepsilon$; $\ell=+\infty$, $\bar x\in\mathbb R$: $\forall m\ \exists\delta:\ 0<|x-\bar x|<\delta\Rightarrow f(x)>m$.

**Limiti laterali** (def. 1.4): stessa definizione con $B^+(\bar x)$ o $B^-(\bar x)$ al posto di $B(\bar x)$. Se $\bar x$ è di accumulazione da entrambe le parti, il limite esiste se e solo se i limiti destro e sinistro esistono e coincidono (prop. 1.1).

**Non esistenza**: $\lim f\neq\ell$ significa $\exists B(\ell)\ \forall B(\bar x)\ \exists x\in B(\bar x)\cap A\setminus\{\bar x\}:\ f(x)\notin B(\ell)$; il limite non esiste se ciò vale per ogni $\ell$.

## Formule chiave
$$\lim_{x\to\bar x}f(x)=\ell\iff\forall\varepsilon>0\ \exists\delta>0:\ 0<|x-\bar x|<\delta,\ x\in A\Rightarrow|f(x)-\ell|<\varepsilon$$

## Intuizione
Conta solo il comportamento vicino a $\bar x$, mai il valore in $\bar x$: per questo si toglie il punto. L'intorno di $\bar x$ dipende da quello di $\ell$ scelto per primo.

## Come si usa
Verifiche dalla definizione (Mazzi, es. 1.1): $\lim_{x\to0}1/x^2=+\infty$ con $\delta=1/\sqrt m$; $\lim_{x\to+\infty}1/x=0$ con $a=1/\varepsilon$. Non esistenza: $1/x$ in $0$ (limiti laterali $+\infty$ e $-\infty$), $\sin x$ per $x\to+\infty$, $\operatorname{sgn}x$ in $0$. La lezione del 18/10/2021 scrive la definizione con un intorno $I$ di $\omega$ e $J$ di $\gamma$ e osserva che "$\cap U$" è ridondante se $f$ è definita in un intorno bucato.

## Nei corsi
- **Analisi 1** (triennale): "intorni, definizione generale di limite di funzione, limiti laterali". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.1, def. 1.1-1.4, prop. 1.1, es. 1.1-1.3, pp. 1-5); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (def. 3.1.13-3.1.14, 3.1.25, PDF pp. 84-85, 90); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-10-18.pdf` (p. 1).

## Prerequisiti
- [[Punto di accumulazione]]: il limite si fa solo lì
- [[Quantificatori]]: ∀ intorno ∃ intorno

## Porta a
- [[Teorema di unicità del limite]]: definizione usata nella dimostrazione
- [[Teorema della permanenza del segno]]: si sceglie un intorno del limite
- [[Teoremi del confronto]]: si intersecano gli intorni
- [[Forme indeterminate]]: regole di somma, prodotto, quoziente
- [[Limite della funzione composta]]: definizioni annidate
- [[Simboli di Landau]]: definiti tramite limiti di rapporti
- [[Asintoti]]: asintoti verticali da limiti infiniti
- [[Funzione continua]]: continuità = limite uguale al valore
- [[Punti di discontinuità]]: usa i limiti laterali
- [[Derivata]]: limite del rapporto incrementale
- [[Punti di non derivabilità]]: derivate laterali
- [[Integrale improprio]]: è un limite dell'integrale

## Collegati
- [[Limite di successione]]: caso x̄=+∞ sul dominio N
- [[Negazione dei quantificatori]]: come si scrive che il limite non è ℓ
