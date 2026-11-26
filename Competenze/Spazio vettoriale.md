---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Istituzioni algebra, Analisi funzionale]
livello: [triennale]
aliases: ["vector space", "K-spazio vettoriale", "spazio vettoriale su un campo", "assiomi di spazio vettoriale", "campo", "field", "K^n", "spazio dei polinomi", "spazio delle matrici"]
tags: [competenza, area/algebra-geometria]
---

# Spazio vettoriale

> Un insieme $V$ con una somma interna e un prodotto per scalari di un campo $K$ che soddisfano 8 proprietà: la struttura astratta in cui ha senso fare combinazioni lineari.

## Definizione / enunciato
Un **campo** $(K,+,\cdot)$ è un insieme con due operazioni che soddisfano 9 proprietà: associatività, neutro, opposto e commutatività per $+$ e per $\cdot$ (inverso solo per gli elementi non nulli), più la distributività. Esempi: $\mathbb Q$, $\mathbb R$, $\mathbb C$.

Un **$K$-spazio vettoriale** (s.v.) è un insieme $V$ con addizione $V\times V\to V$ e moltiplicazione per scalari $K\times V\to V$ tali che:
- (+1) associatività;
- (+2) esiste $0_V$ con $v+0_V=v$;
- (+3) esiste l'opposto $-v$;
- (+4) commutatività;
- (·1) $\alpha(\beta v)=(\alpha\beta)v$;
- (·2) $1_K\cdot v=v$;
- (d1) $(\alpha+\beta)v=\alpha v+\beta v$;
- (d2) $\alpha(v_1+v_2)=\alpha v_1+\alpha v_2$.

Quindi $(V,+)$ è un gruppo commutativo. Gli elementi di $V$ sono **vettori**, quelli di $K$ **scalari**. Lo s.v. nullo è $\{0_V\}$.

## Formule chiave
Per riconoscere uno s.v. servono 10 verifiche: le due operazioni devono essere ben definite ($S\times S\to S$, $K\times S\to S$) e devono valere le 8 proprietà.

## Intuizione
La definizione non dice *cosa* sono i vettori, solo come si combinano: frecce di $V_3(O)$, $n$-ple di $K^n$, matrici $K^{m\times n}$, polinomi $\mathbb R_n[x]$, funzioni. Tutta la teoria (basi, dimensione, applicazioni lineari) vale per tutti questi oggetti insieme.

## Come si usa
- Esempio negativo (p. 8 di `7_Spazi_vettoriali.pdf`): $\mathbb R^2$ con la somma usuale e $\alpha*x:=|\alpha|x$ **non** è un $\mathbb R$-s.v. Infatti (d1) fallisce: $0=(1-1)*x=1*x+(-1)*x=2x$ è assurdo per $x\neq0$.
- Esempio scherzoso delle slide: le "polpette" formano un $\mathbb Q$-spazio vettoriale ma non un $\mathbb R$-spazio vettoriale (che senso avrebbe $\sqrt2\,p$?). Il campo fa parte della struttura.
- Esempi tipici d'esame: spazi di matrici simmetriche, polinomi con condizioni (es. $p(1)=0$).

## Nei corsi
- **Algebra lineare** (triennale): spazi vettoriali parte I (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/7_Spazi_vettoriali.pdf` (p. 2-11); `Appunti, riassunti e formulari/Spazi Sottospazi3_SpaziDiversi.pdf`; `Appunti, riassunti e formulari/spazi-vettoriali-slides.pdf` (R. Notari).
- **Istituzioni algebra** (triennale): per ogni estensione di campi $E|F$, $E$ è in modo naturale uno spazio vettoriale su $F$ (Prop. 3), e il grado $[E:F]$ ne è la dimensione. Ogni spazio non nullo ha una base, anche infinita, per il Lemma di Zorn. Fonti: `triennale/ANNO 2/istituzioni/Alg-14-12-22.pdf` (lezioni 33/34, pp. 3-4); `triennale/ANNO 2/istituzioni/Alg-28-09-22.pdf` (lezione 1-2, pp. 16-18).
- **Analisi funzionale** (triennale): cap. 1 "Richiami di algebra lineare", con $\mathbb F=\mathbb R$ o $\mathbb C$. Gli esempi rilevanti sono spazi di funzioni con operazioni puntuali: $C_{\mathbb F}(I)$, $C_{\mathbb F}(\Omega)$ per $\Omega$ spazio topologico, $F(S,V)$, i polinomi $\mathcal P=\mathbb F[X]$, il prodotto diretto $V\times W$; ogni spazio complesso è anche reale. Def. 1.7: $A$ è **convesso** se $(1-\theta)x+\theta y\in A$ per $x,y\in A$, $\theta\in[0,1]$. Sono il punto di partenza di spazi normati, di Banach e di Hilbert. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (§1.1, pp. 2-4); `triennale/ANNO 3/analisi funzionale/01_spazivettoriali_handout.pdf` (pp. 2-6).

## Prerequisiti
- [[Vettori applicati e vettori liberi]]: V3(O) e R^3 sono il prototipo di spazio vettoriale

## Porta a
- [[Sottospazio generato]]: combinazioni lineari di vettori dati
- [[Sottospazio vettoriale]]: sottoinsiemi chiusi per combinazioni lineari
- [[Applicazione lineare]]: mappe che rispettano la struttura
- [[Spazio vettoriale euclideo]]: spazio vettoriale reale più un prodotto scalare
- [[Spazio normato]]: spazio vettoriale con una norma (Analisi funzionale)

## Collegati
- [[Gruppo]]: $(V,+)$ è un gruppo abeliano
- [[Campo (struttura algebrica)]]: la struttura degli scalari
- [[Estensione di campi]]: un'estensione $E|F$ è uno spazio vettoriale su $F$
- [[Assiomi dei numeri reali]]: R è il campo ordinato su cui si costruiscono gli spazi reali
- [[Numeri complessi]]: C è un campo e C^n uno spazio vettoriale su C
