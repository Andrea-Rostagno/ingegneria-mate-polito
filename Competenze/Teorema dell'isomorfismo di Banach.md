---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["Banach isomorphism theorem", "inverse mapping theorem", "teorema dell'inversa limitata", "bounded inverse theorem", "isomorfismo (operatore invertibile con inverso limitato)"]
tags: [competenza, area/analisi]
---

# Teorema dell'isomorfismo di Banach

> Fra spazi di Banach un operatore limitato e biiettivo ha automaticamente inverso limitato: è un isomorfismo.

## Definizione / enunciato
$T\in\mathcal B(X,Y)$ è un **isomorfismo** (invertibile con inverso limitato) se è biiettivo e $T^{-1}\in\mathcal B(Y,X)$ (Def. 7.32). Composizioni e inversi di isomorfismi sono isomorfismi; se $X\ne\{0\}$, $\|T^{-1}\|_{op}\|T\|_{op}\ge1$.
**Teor. 7.36.** Siano $X$, $Y$ di Banach e $T\in\mathcal B(X,Y)$ biiettivo. Allora $T^{-1}\in\mathcal B(Y,X)$.
(Dimostrazione omessa nelle note.)

## Formule chiave
Es. 7.34: per $T(x,y)=(x,y/2)$ su $(\mathbb F^2,\|\cdot\|_p)$ si ha $\|T\|_{op}=1$, $\|T^{-1}\|_{op}=2$, quindi $\|T\|_{op}\|T^{-1}\|_{op}=2>1$.
Es. 7.35(2): su $c_{00}$ con $\|\cdot\|_p$, $Tx=(2^{-k}x_k)_k$ è limitato e biiettivo ma $\|T^{-1}e^{(n)}\|_p=2^n$, quindi $T^{-1}$ è illimitato: la completezza è essenziale.

## Intuizione
In dimensione finita ogni biiezione lineare è un isomorfismo. In dimensione infinita l'inversa di un operatore continuo può essere discontinua, a meno che entrambi gli spazi siano completi: allora la continuità dell'inversa è gratuita.

## Come si usa
- Equivale al teorema del grafico chiuso (Oss. 7.38): dall'uno si dimostra l'altro.
- Garantisce la buona posizione: se $Tx=y$ ha un'unica soluzione per ogni $y$, la soluzione dipende con continuità dal dato, $\|x\|\le\|T^{-1}\|_{op}\|y\|$.
- Nel criterio di coercività e nell'alternativa di Fredholm "biiettivo" diventa "isomorfismo".

## Nei corsi
- **Analisi funzionale** (triennale): §7.5 "Operatori limitati invertibili" (Def. 7.32, Es. 7.34-7.35, Teor. 7.36, Oss. 7.38). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 107-110); `triennale/ANNO 3/analisi funzionale/06_operatorilimitati_handout.pdf` (p. 12).

## Prerequisiti
- [[Spazio di Banach]]: completezza di dominio e codominio
- [[Operatore lineare limitato]]: T e T^-1 limitati

## Porta a
- [[Teorema del grafico chiuso]]: dimostrato a partire dall'isomorfismo
- [[Alternativa di Fredholm]]: biiettivo equivale a isomorfismo

## Collegati
- [[Operatore coercivo in norma]]: criterio alternativo di invertibilità
- [[Matrice inversa]]: caso di dimensione finita
- [[Teorema di Banach-Steinhaus]]: altro pilastro della teoria su Banach
- [[Lemma di Baire]]: strumento classico per questi teoremi (dimostrazione omessa nelle note)
