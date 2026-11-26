---
tipo: competenza
area: algebra-geometria
corsi: [Crittografia]
livello: [magistrale]
aliases: ["square-and-multiply", "square and multiply", "algoritmo quadra e moltiplica", "modular exponentiation", "esponenziazione modulare", "potenza modulare", "fast modular exponentiation"]
tags: [competenza, area/algebra-geometria]
---

# Esponenziazione modulare veloce

> L'algoritmo *square-and-multiply* calcola $a^n \bmod q$ con un numero di moltiplicazioni proporzionale al numero di bit di $n$, invece che a $n$. Rende praticabili RSA, Diffie-Hellman ed ElGamal.

## Definizione / enunciato
Sia $n=(d_t d_{t-1}\cdots d_0)_2$, con $d_t=1$, la rappresentazione binaria dell'esponente. L'algoritmo 6.1.9 delle dispense (`Crypto6.pdf` p. 4) scorre i bit dal più significativo:

```
T = 1
for i = t downto 0:
    T = T*T          (square)
    if d_i = 1:
        T = T*a      (multiply)
return T
```

In $\mathbb Z_q$ ogni prodotto si riduce subito modulo $q$. Così i numeri intermedi restano minori di $q$.

## Formule chiave
Codice Python della dispensa (`Crypto6.pdf` p. 4, 6.1.10):
```python
def squaremultiply(a,n,q):
    bina='{0:b}'.format(n)
    T=1
    amq=a%q
    for d in bina:
        T=(T*T)%q
        if d=='1': T=(T*amq)%q
    return(T)
```
Ogni bit di $n$ costa uno squaring e, se il bit vale 1, una moltiplicazione. Le operazioni sono quindi al più $2(t+1)$, cioè lineari in $\log_2 n$ (conto mio sull'algoritmo).

## Intuizione
Dopo aver letto i bit $d_t\cdots d_i$, vale $T=a^{(d_t\cdots d_i)_2}$. Leggere un bit in più raddoppia l'esponente (squaring) e, se il bit è 1, gli aggiunge 1 (moltiplicazione per $a$). È lo schema di Horner applicato agli esponenti.

## Come si usa
- **Esercizi della dispensa:** calcolare $8^e\bmod p$ con $e=(p+1)/4$, per primi $p$ grandi (es. 6.1.7-6.1.8). Per $p\equiv3\pmod4$ è la formula della radice quadrata modulare; i valori esatti di $p$ sono da verificare sul PDF, perché il testo estratto perde gli esponenti.
- **RSA:** cifratura e decifratura sono potenze $m^e$, $c^d$ modulo $n$, con esponenti di centinaia di bit.
- **Logaritmo discreto:** l'asimmetria è netta. Calcolare $g^k$ è facile con questo algoritmo, mentre risalire a $k$ è difficile.

## Nei corsi
- **Crittografia** (magistrale): §6.1.1 "Computing powers $a^n$" delle dispense inglesi, con l'implementazione Python. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week6/Crypto6.pdf` (p. 4).

## Prerequisiti
- [[Classi di resto modulo n]]: si lavora in $\mathbb Z_q$

## Porta a
- [[RSA]]: cifratura e decifratura per potenze modulari
- [[Test di primalità]]: Fermat e Rabin-Miller calcolano $a^d \bmod n$
- [[Residui quadratici]]: criterio di Eulero e radici $r^{(p+1)/4}$

## Collegati
- [[Problema del logaritmo discreto]]: problema inverso, difficile
- [[Funzione phi di Eulero]]: gli esponenti si riducono modulo $\varphi(n)$
- [[Costo computazionale di un algoritmo]]: costo lineare nel numero di bit
